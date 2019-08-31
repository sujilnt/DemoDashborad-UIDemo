import React, {Fragment, PureComponent} from "react";
import { MenuItem,Menu,Icon,Collapse,Intent,Card, Elevation  } from "@blueprintjs/core";
import { sideBarData } from "./data";
import "./Sidebar.css";
class SideBar extends PureComponent {
    state = {
        isOpen: false,
        menuName: "Dashboard"
    };
    openCloseList = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const name = e.target.getAttribute("id");
        this.setState((prevState, props) => {
            return {
                isOpen: !prevState.isOpen,
                menuName: name
            };
        });
    };
    collapseItems = (item) => {
        let collapseItems = [];
        item.forEach((row, i) => {
            collapseItems.push(
                <Fragment key={`F-items-${row.name}-${i}`}>
                    <MenuItem icon={<Icon icon={row.icon} iconSize={"18"}
                                          intent={Intent.PRIMARY}/>}
                              text={<div className={"fullWidth opactiy-mid captialize fontWeight"}>{row.name}</div>}
                              key={`items-${row.name}-${i}`}
                              href={row.href || "/"}
                              large={"true"}
                    />
                </Fragment>
            )
        });
        return collapseItems;
    };
    renderMenu = () => {
        const {menuName} = this.state;
        let renderMenuArr = [];
        sideBarData.forEach((row, i) => {
            renderMenuArr.push(
                <Fragment key={`F-menu-${i}`}>
                    <MenuItem
                        icon={ <Icon icon={row.icon} iconSize={"18"}
                                     intent={Intent.PRIMARY}/>}
                        text={<div className="space-between flex">
                            <div id={row.name} className={"fullWidth captialize fontWeight"}>
                                {row.text}
                            </div>
                            <Icon icon={row.name === menuName ? "caret-down" : "caret-up"} iconSize={"18"}
                                  intent={Intent.PRIMARY}/>
                        </div>}
                        key={`menu-${row.name}${i}`}
                        onClick={this.openCloseList}
                        className={"menu"}
                        large={"true"}
                        intent={Intent.PRIMARY}
                        active={row.name === menuName}
                    />
                    {
                        (row.item.length >= 1) ? <Collapse
                            isOpen={row.name === menuName}
                            keepChildrenMounted={true}
                            key={`C-menu-${row.name}${i}`}
                            transitionDuration={500}
                        >
                            {this.collapseItems(row.item)}
                        </Collapse> : ""
                    }
                </Fragment>
            );
        });
        return renderMenuArr;

    };

    render() {
        return (<Card elevation={Elevation.ONE} className={"fullHeight zeropadding"}>
            <Menu large={true} className={"zeropadding"}>
                {this.renderMenu()}
            </Menu>
        </Card>);


    }

}
export default SideBar;