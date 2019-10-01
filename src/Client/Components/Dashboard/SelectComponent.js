import React,{Component} from "react";
import {Select} from "@blueprintjs/select";
import { Button, Menu, MenuItem } from "@blueprintjs/core";
import PropTypes from "prop-types";

class SelectComponent extends Component{
    itemProp = this.props.sensorinformation;
    state={
        activeItem: this.itemProp[0].name,
        itemList: this.itemProp,
        myQuery:""
    };
    handleQueryChange =(e)=>{
        // Function is called when query is called in select
        let queryData= this.itemProp.filter(row => {
            return row.name.toLowerCase().indexOf(e.toLowerCase())>=0;
        });
        this.setState({
            myQuery:e,
            itemList: queryData
        });
    };

    handleClick =(e,i)=>{
        // selecting an element in the select component
        this.setState(()=>{
            return{
                activeItem: i.name,
                e:""
            }
        });
        this.props.selectSensor(i);
    };
    menuRender=(item)=>{
        return(
            <Menu large={this.props.large}>
                <MenuItem
                active={this.state.activeItem === item.name}
                key={item._id}
                text={item.name}
                onClick={(e)=>this.handleClick(e,item)}
                />
            </Menu>
        );
    };
    render(){
        const { itemList } =this.state;
        const {large} =this.props;
        const data = itemList;
        const name = this.state.activeItem;
        console.log(itemList,this.state.activeItem,"namesss");
        return(
            <div style={{margin: 20}}>
                <Select
                    itemRenderer={this.menuRender}
                    noResults={<MenuItem disabled={true} text="No results." />}
                    items={data}
                    activeItem={this.state.activeItem}
                    scrollToActiveItem={true}
                    query={this.state.myQuery}
                    onQueryChange={this.handleQueryChange}
                    resetOnClose={true}
                >
                    <Button text={name} rightIcon="double-caret-vertical" large={large}/>
                </Select>
            </div>
        )
    }
}
SelectComponent.defaultProps={
    sensorinformation: []
};
SelectComponent.propTypes={
    large: PropTypes.bool,
    selectSensor: PropTypes.func,
    sensorinformation: PropTypes.array
};
export default  SelectComponent;