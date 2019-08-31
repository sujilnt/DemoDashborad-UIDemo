import React from "react";
import {} from "react-redux"
import { NavbarGroup, NavbarHeading, NavbarDivider, Icon,Button, Navbar, Classes, Alignment } from "@blueprintjs/core";
import {useSelector} from "react-redux";
import SideBar from "../SideBar/SideBar";
import TreeComponent from "../Tree/Tree";
import TreeContainer from "../Tree/TreeContainer";

const NavbarComponent = (props) =>{
	console.log("Navbar props",props);
	const intialState =  useSelector(state=> state.user);
	return (
		<div>
			<Navbar className="main-page_nav">
				<NavbarGroup align={Alignment.LEFT} className="main-page_nav">
					<div style={{"margin": "0 auto", "width": "200px", "textAlign": "center"}}>
						<NavbarHeading>
							<span>IOT Analytics &nbsp;</span>
							<Icon icon={"chart"} intent={"primary"} iconSize={20} />
						</NavbarHeading>
					</div>
				</NavbarGroup>
				<NavbarGroup align={Alignment.RIGHT} className="main-page_nav">
					<NavbarHeading>Welcome {intialState.name}!</NavbarHeading>
					<NavbarDivider />
					<Button className={Classes.MINIMAL} icon="notifications" text="Notifications"/>
					<Button className={Classes.MINIMAL} icon="log-out" text="logout"/>
				</NavbarGroup>
			</Navbar>
			<div style={{"width": 300}}>
				<SideBar location = {props.location}/>
			</div>

		</div>
	);
};

export default NavbarComponent;
