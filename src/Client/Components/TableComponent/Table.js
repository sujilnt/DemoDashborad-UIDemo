import React, {PureComponent} from "react";
import '@blueprintjs/table/lib/css/table.css';
import PropTypes from "prop-types";
import {Card} from "@blueprintjs/core";
import { Column,Cell, Table } from "@blueprintjs/table";
import "./Table.css";
import ReactPaginate from 'react-paginate';

const columnheader=["sid","value","oat"];
class TableComponent extends PureComponent{
    state={
        isloading: true,

    };
    renderCell = (rowIndex, columnIndex) => {  // eslint-disable-line
        let row = this.props.data[rowIndex];
        let value = row[columnheader[columnIndex]];
        console.log("blueprint",value,value);
        return (
            <Cell interactive={true} >{value}</Cell>
        ); // eslint-disable-line
    };
    render(){
        return(
            <Card className={"tableContainer"}>
                <Table numRows={this.props.data.length} >
                    <Column
                        name={"sid"}
                        cellRenderer={this.renderCell}
                    />
                    <Column name={"value"}
                            cellRenderer={this.renderCell}
                    />
                    <Column name={"oat"}
                            cellRenderer={this.renderCell}
                    />
                </Table>
            </Card>
        );
    }
}
TableComponent.propTypes={
    data: PropTypes.array.isRequired
};
export default TableComponent;