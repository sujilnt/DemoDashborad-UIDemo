import React, {Component,Fragment} from "react";
import '@blueprintjs/table/lib/css/table.css';
import { Column,Cell, Table,SelectionModes, RenderMode} from "@blueprintjs/table";
import "./Table.css";
const columnsHeader = ["_id","name","sensordt","sensortype","createdBy"];
class sensorInformationTable extends Component{
    state={
        loading: false,
        columnData: [],
        columnWidths: [],
        update: false
    };
    componentDidMount() {
        let columns = this.renderColumn();
        this.setState(()=>{
            return {
                columnData: columns,
                columnWidths: [230, 340, 198, 112, 243]
            }
        })
    }
    cellRender = (rowIndex,columnIndex)=>{
         const {data}= this.props;
         let value = data[rowIndex];
         let name = columnsHeader[columnIndex];
         return (
            <Cell
            interactive={true}
            className={"normal-row"}
            parentCellHeight={30}
            parentCellWidth={200}
        >
            {value[name]}
        </Cell>
        )
    };
    OncomnpleteRender = ()=>{
        if(this.state.update){
            this.setState(()=>({
                update: false
            }));
        }
    };
    // resizing based on the size
    onWidthChanged = (index,size)=>{
        let columnWidth_new = this.state.columnWidths;
        columnWidth_new[index] =size;
        this.setState(()=>({
            columnWidth: columnWidth_new
        }));
    };
    renderColumn = ()=>{
        return[
            <Column key="0"
                    name={"_id"}
                    id={"_id"}
                    cellRenderer={this.cellRender}
                    className={"large-column"}
            />,
            <Column key="1"
                    name={"name"}
                    id={"name"}
                    cellRenderer={this.cellRender}
            />,
            <Column key="2"
                    name={"sensordt"}
                    id={"sensordt"}
                    cellRenderer={this.cellRender}
            />,
            <Column key="3"
                    name={"sensortype"}
                    id={"sensortype"}
                    cellRenderer={this.cellRender}
            />,
            <Column key="4"
                    name={"createdBy"}
                    id={"createdBy"}
                    cellRenderer={this.cellRender}
            />

        ];
    };

    render() {
        console.log(this.state, "what is this state");
        return (
            <Fragment>
                <Table
                    selectionModes={SelectionModes.ALL}
                    numRows = {this.props.data.length}
                    enableColumnReordering={true}
                    enableFocusedCell={true}
                    defaultRowHeight={30}
                    enableRowHeader={true}
                    enableRowReordering={true}
                    enableMultipleSelection={true}
                    enableRowResizing={true}
                    enableColumnResizing={true}
                    forceRerenderOnSelectionChange={true}
                    maxColumnWidth={340}
                    truncated={true}
                    wrapText={true}
                    minColumnWidth={100}
                    enableGhostCells={true}
                    onCompleteRender={this.OncomnpleteRender}
                    onColumnWidthChanged={this.onWidthChanged}
                    renderMode={RenderMode.BATCH}
                    columnWidths={this.state.columnWidths}
                >
                    {this.state.columnData}
                </Table>

            </Fragment>
        )

    }
};
export default sensorInformationTable;