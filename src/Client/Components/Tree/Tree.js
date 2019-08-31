import React, {Fragment, PureComponent} from "react";
import {Tree, Classes, Tooltip, Position, Icon, Intent} from "@blueprintjs/core";
class TreeComponent extends PureComponent{
    state={
        data: SideBarData
    };
    handleNodeClick=(node, node_index,event)=>{
        const {data} = this.state;
        let index = node_index[0];
        this.setState((prevstate,props)=>{
            let newdata = {
                ...prevstate.data,
                    [index]: {...data[index], isExpanded: !data[index].isExpanded },
            };
            return{
                data: newdata
            }
        });
        console.log(node_index,node,event,this.state.data);
        console.log(this.state.data[node_index],index);

        return true;
    };
    onNodeCollapse = (node, node_index,event)=>{
        const {data} = this.state;
        let index = node_index[0];
        this.setState((prevstate,props)=>{
            let newdata = {
                ...prevstate.data,
                [index]: {...data[index], isExpanded: !data[index].isExpanded },
            };
            return{
                data: newdata
            }
        });
     console.log("onNodeCollapse",index,node,event);
    };
    render(){
        console.log("data",this.state.data);
        return(
            <Fragment>
                <Tree
                    contents={this.props.data}
                    className={Classes.ELEVATION_1}
                    onNodeClick={this.handleNodeClick}
                    onNodeCollapse = {this.onNodeCollapse}

                />
        </Fragment>
        )
    }

}
export default  TreeComponent;

const SideBarData = [
    {
        id: 0,
        hasCaret: true,
        icon: "folder-close",
        label: "Dashboard",
    },
    {
        id: 1,
        icon: "folder-close",
        isExpanded: true,
        label: (
            <Tooltip content="" position={Position.RIGHT}>
                Dashboard
            </Tooltip>
        ),
        childNodes: [
            {
                id: 2,
                icon: "chart",
                label: "home",
                secondaryLabel: (
                    <Tooltip content="HomePage">
                        <Icon icon="eye-open" />
                    </Tooltip>
                ),
            },
            {
                id: 3,
                icon: <Icon icon="tag" intent={Intent.PRIMARY} className={Classes.TREE_NODE_ICON} />,
                label: "Query Data",
            },
            {
                id: 4,
                hasCaret: true,
                icon: "folder-close",
                label: (
                    <Tooltip content="foo" position={Position.RIGHT}>
                        Folder 2
                    </Tooltip>
                )
            },
        ],
    }
];
