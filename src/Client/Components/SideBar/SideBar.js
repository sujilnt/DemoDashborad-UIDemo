import React,{PureComponent} from "react";
import { MenuItem,MenuDivider,Menu, Position ,Classes,Icon,Collapse  } from "@blueprintjs/core";
class SideBar extends  PureComponent{
    state={
        isOpen: false
    };
    openCloseList = ()=>{
        this.setState((prevState, props)=>{
           return {
               isOpen: !prevState.isOpen
           };
        });
    };
    render() {
        return (<div>
            <Menu className={Classes.ELEVATION_1}>
                <MenuItem icon={"cog"} text="Custom SVG icon"  onClick={this.openCloseList}/>
                <MenuDivider />
                <Collapse isOpen={this.state.isOpen}>
                <MenuItem icon="new-text-box" text="New text box" />
                <MenuItem icon="new-object" text="New object" />
                <MenuItem icon="new-link" text="New link" />
                <MenuDivider />
                </Collapse>

                <MenuItem icon="cog" labelElement={<Icon icon="share" />} text="Settings..." />
            </Menu>
        </div>);


    }
};
export default SideBar;