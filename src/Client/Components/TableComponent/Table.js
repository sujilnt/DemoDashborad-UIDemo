import React, {Component,Fragment} from "react";
import '@blueprintjs/table/lib/css/table.css';
import PropTypes from "prop-types";
import {Card} from "@blueprintjs/core";
import { Column,Cell, Table,Utils,TableLoadingOption,SelectionModes} from "@blueprintjs/table";
import "./Table.css";
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
        end: 50
    };

    componentDidMount() {
        let columns = this.columns();
        this.setState({
            columnData: columns
        })
    }

    handlePageClick=(e)=>{
        console.log("clicked",e,this.state);
        const {selected}=e;
        const FIFTY=50;
        let vstart= FIFTY * selected - FIFTY || 0;
        let vend =FIFTY*selected;
        console.log(vstart,vend,selected);
        this.setState({
            start:vstart,
            end:vend
        });
    };

    renderCell = (rowIndex, columnIndex) => {  // eslint-disable-line
        let data = this.getdate(this.state.start,this.state.end);
        let row =data[rowIndex] ,column = this.state.columnData[columnIndex];
        let value = row[columnheader[Number(column.key)]], columnName = column.props.name;

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
            <Column key="0" name={"sid"}  cellRenderer={this.cellRenderFunction}  className={"large-column"} />,
            <Column key="1" name={"value"} cellRenderer={this.cellRenderFunction} />,
            <Column key="2" name={"oat"} cellRenderer={this.cellRenderFunction} />,
            <Column key="3" name={"time"} className={"large-column"}  cellRenderer={this.cellRenderFunction} />
        ];
    };
    getdate=(start,end)=>{
        let tabledata=[];
        for(let i = start;i<=end;i++){
            tabledata.push(this.props.data[i]);
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
        console.log(oldIndex,newIndex,nextChildren,Utils.reorderArray,"table reordering");
    };
    onWidthChanged = (index,size)=>{
        let columnWidth_new = this.state.columnWidth;
        columnWidth_new[index] =size;
        this.setState(()=>({
            columnWidth: columnWidth_new
        }));
    };
    render(){
        let pagecount = Math.ceil(this.props.data.length/50);
        return(
            <Card className={"tableContainer"}>
                {
                    this.state.columnData.length >=2 ? (<div>
                        <Table
                            selectionModes={SelectionModes.ALL}
                            numRows={50}
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
                            onColumnWidthChanged={this.onWidthChanged}
                            maxColumnWidth={250}
                            truncated={true}
                            wrapText={true}
                            minColumnWidth={100}
                        >
                            {this.state.columnData}
                        </Table>
                        <ReactPaginate
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pagecount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={this.handlePageClick}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
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