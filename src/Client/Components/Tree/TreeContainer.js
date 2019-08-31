import React, {Fragment} from "react";
import TreeComponent from "./Tree";
import {Position,Tooltip,Icon,Intent,Classes} from "@blueprintjs/core"
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
const TreeContainer = ()=>{
    return (<Fragment><TreeComponent data={SideBarData}/> </Fragment>)
};

export default TreeContainer;