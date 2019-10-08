import React, {PureComponent} from "react";
import '@blueprintjs/table/lib/css/table.css';
import PropTypes from "prop-types";
import {Card} from "@blueprintjs/core";
import { Column,Cell, Table } from "@blueprintjs/table";
import "./Table.css";
import ReactPaginate from 'react-paginate';

const columnheader=["sid","value","oat","time"];
class TableComponent extends PureComponent{
    state={
        isloading: true,
        start:0,
        end: 50
    };
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
    renderDateCell = (rowIndex,columnIndex)=>{
        let data = this.getdate(this.state.start,this.state.end);
        let row =data[rowIndex];
        let value = row[columnheader[columnIndex]];
        return (
            <Cell interactive={true} className={"date-row"}>{new Date(value).toUTCString()}</Cell>
        ); // eslint-disable-line
    };
    renderCell = (rowIndex, columnIndex,) => {  // eslint-disable-line
        let data = this.getdate(this.state.start,this.state.end);
        let row =data[rowIndex];
        let value = row[columnheader[columnIndex]];
        return (
            <Cell interactive={true} className={"normal-row"}>{value}</Cell>
        ); // eslint-disable-line
    };
    getdate=(start,end)=>{
        let tabledata=[];
        for(let i = start;i<=end;i++){
            tabledata.push(this.props.data[i]);
        }
        return tabledata;
    };
    render(){
        let pagecount = Math.ceil(this.props.data.length/50);
        console.log("length",this.props.data.length);
        return(
            <Card className={"tableContainer"}>
                <Table
                    numRows={50}
                    enableColumnReordering={true}
                    enableColumnResizing={false}
                    enableRowReordering={true}
                >
                    <Column
                        name={"sid"}
                        cellRenderer={this.renderCell}
                        className={"large-column"}
                    />
                    <Column
                        name={"value"}
                        cellRenderer={this.renderCell}
                    />
                    <Column
                        name={"oat"}
                        cellRenderer={this.renderCell}
                    />
                    <Column
                        name={"time"}
                        className={"large-column"}
                        cellRenderer={this.renderDateCell}
                    />
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
            </Card>
        );
    }
}
TableComponent.propTypes={
    data: PropTypes.array.isRequired
};
export default TableComponent;