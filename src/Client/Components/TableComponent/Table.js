import React, {Component,Fragment} from "react";
import '@blueprintjs/table/lib/css/table.css';
import PropTypes from "prop-types";
import {Card} from "@blueprintjs/core";
import { Column,Cell, Table,Utils,TableLoadingOption,SelectionModes,RenderMode} from "@blueprintjs/table";
import "../TableComponent/Table.css";
import ReactPaginate from 'react-paginate';

const columnheader=["sid","value","oat","time"];
class TableComponent extends Component{
    constructor(props){
        super(props);
        this.cellRenderFunction = this.cellRenderFunction.bind(this);
    }
    state={
        columnData: [],
        columnWidth: [250, 100, 100, 300],
        isloading: true,
        start:0,
        end: 50,
        numberOfRows: 50,
        pageCount: 0,
        rowData: [],
        update: false,
    };

    componentDidMount() {
        let pagecount = Math.ceil(this.props.data.length/50);
        let columns = this.columns();
        this.setState({
            columnData: columns,
            pageCount:pagecount
        })
    }


    handlePageClick=(e)=>{
        const FIFTY=50,
            {selected}=e;
        let vstart= FIFTY * selected; // [0,50]
        let vend =FIFTY*selected + FIFTY; //[50,100]
        console.log("clicked page",vstart,vend,selected);
        let numberOfRows = selected === this.state.pageCount-1 ? this.props.data.length % FIFTY : FIFTY;
        console.log("clicked page",vstart,vend,selected,numberOfRows);
        this.setState(()=>({
            start:vstart,
            end:vend,
            update:true,
            numberOfRows
        }));
        this.forceUpdate();
    };

    renderCell = (rowIndex, columnIndex) => {  // eslint-disable-line
        let data = this.getdate(this.state.start,this.state.end);
        let row =data[rowIndex] ,
            column = this.state.columnData[columnIndex],
            value = row[columnheader[Number(column.key)]],
            columnName = column.props.name;

        if(columnName !== "time"){
            return columnName === "sid" ? (
                <Cell
                    interactive={true}
                    className={"normal-row"}
                    parentCellHeight={30}
                    parentCellWidth={200}
                >
                    {value}
                </Cell>
            ): (
                <Cell
                    interactive={true}
                    className={"normal-row"}
                    parentCellHeight={30}
                    parentCellWidth={200}
                >
                    <Fragment>{value}<span className={"temperature-unit"} >°C</span></Fragment>
                </Cell>
            );

        }else {
            return (
                <Cell interactive={true} className={"date-row"} parentCellHeight={30} parentCellWidth={200}>{new Date(value).toUTCString()}</Cell>
            );
        }
    };
    cellRenderFunction(rowIndex,columnIndex){
        return this.renderCell(rowIndex,columnIndex);
    }
    columns = ()=>{
        return [
            <Column key="0" name={"sid"}  id={"sid"} cellRenderer={this.cellRenderFunction}  className={"large-column"} />,
            <Column key="1" name={"value"} id={"value"} cellRenderer={this.cellRenderFunction} />,
            <Column key="2" name={"oat"} id={"oat"} cellRenderer={this.cellRenderFunction} />,
            <Column key="3" name={"time"} id={"time"} className={"large-column"}  cellRenderer={this.cellRenderFunction} />
        ];
    };
    getdate=(start,end)=>{
        let tabledata=[];
        for(let i = start;i<=end;i++){
            let value = this.props.data[i];
            value ? tabledata.push(value): "";
        }
        return tabledata;
    };
    checktableordering=(oldIndex, newIndex, length)=>{
        if (oldIndex === newIndex) {
        return;
    }

        const nextChildren = Utils.reorderArray(this.state.columnData, oldIndex, newIndex, length);
        this.setState({
            columnData: nextChildren
        });
    };
    onWidthChanged = (index,size)=>{
        let columnWidth_new = this.state.columnWidth;
        columnWidth_new[index] =size;
        this.setState(()=>({
            columnWidth: columnWidth_new
        }));
    };
    OncomnpleteRender = ()=>{
        if(this.state.update){
            this.setState(()=>({
                update: false
            }));
        }
    };
    render(){
        console.log("component rerender",this.state, this.props.data.length%50,this.props.data);
        return(
            <Card className={"tableContainer"}>
                {
                    this.state.columnData.length >=2 ? (<div>
                        <Table
                            selectionModes={SelectionModes.ALL}
                            numRows={this.state.numberOfRows}
                            enableColumnReordering={true}
                            enableFocusedCell={true}
                            defaultRowHeight={30}
                            enableRowHeader={true}
                            onColumnsReordered={this.checktableordering}
                            columnWidths ={this.state.columnWidth}
                            enableRowReordering={true}
                            enableMultipleSelection={true}
                            enableRowResizing={true}
                            enableColumnResizing={true}
                            forceRerenderOnSelectionChange={true}
                            onColumnWidthChanged={this.onWidthChanged}
                            maxColumnWidth={250}
                            truncated={true}
                            wrapText={true}
                            minColumnWidth={100}
                            enableGhostCells={true}
                            onCompleteRender={this.OncomnpleteRender}
                            renderMode={RenderMode.BATCH}
                        >
                            {this.state.columnData}
                        </Table>
                        <div id="react-paginate">
                            <ReactPaginate
                                previousLabel={'<'}
                                nextLabel={'>'}
                                breakLabel={'.....'}
                                breakClassName={'break-me'}
                                pageCount={this.state.pageCount}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName={'pagination'}
                                pageClassName={"single-page"}
                                nextClassName={"next-page"}
                                previousClassName={"previous-page"}
                                subContainerClassName={'pages pagination'}
                                activeClassName={'active-page'}
                            />
                        </div>

                    </div>) : (
                        <Table
                            loadingOptions={
                                [
                                    TableLoadingOption.CELLS,
                                    TableLoadingOption.COLUMN_HEADERS,
                                    TableLoadingOption.ROW_HEADERS
                                ]}>
                        </Table>
                    )

                }

            </Card>
        );
    }
}
TableComponent.propTypes={
    data: PropTypes.array.isRequired
};
export default TableComponent;