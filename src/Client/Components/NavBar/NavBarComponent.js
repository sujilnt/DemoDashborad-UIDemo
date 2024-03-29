import React from "react";
import { NavbarGroup,NavbarHeading, NavbarDivider, Icon,Button, Navbar, Classes, Alignment } from "@blueprintjs/core";
import {useSelector} from "react-redux";

const logOut = ()=>{
	window.location.href = '/';
	window.localStorage.clear();
};
const NavbarComponent = () =>{
	const intialState =  useSelector(state=> state.user);
	return (
		<div>
			<Navbar className="main-page_nav">
				<NavbarGroup align={Alignment.LEFT} className="main-page_nav">
					<div style={{"margin": "0 auto", "width": "200px", "textAlign": "center"}}>
						<NavbarHeading className={"contentCenter alignCenter"}>
							<span style={{"fontWeight": "bolder","fontSize": "18"}}>IOT Analytics &nbsp;</span>
							<Icon icon={"chart"} intent={"primary"} iconSize={24}/>
						</NavbarHeading>
					</div>
				</NavbarGroup>
				<NavbarGroup align={Alignment.RIGHT} className="main-page_nav">
					<NavbarHeading>Welcome {intialState.name}!</NavbarHeading>
					<NavbarDivider/>
					<Button className={Classes.MINIMAL} icon="notifications" text="Notifications"/>
					<Button className={Classes.MINIMAL} icon="log-out" text="logout" onClick={logOut}/>
				</NavbarGroup>
			</Navbar>
		</div>
	);
};

export default NavbarComponent;
