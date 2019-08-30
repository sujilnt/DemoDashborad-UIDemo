import React from "react";
import {} from "react-redux"
import { NavbarGroup, NavbarHeading, NavbarDivider, Button, Navbar, Classes, Alignment } from "@blueprintjs/core";
import {useSelector} from "react-redux";

const NavbarComponent = () =>{
	const intialState =  useSelector(state=> state.user);
	return  (
		<div>
			<Navbar>
				<NavbarGroup align={Alignment.RIGHT} className="main-page_nav">
					<NavbarHeading>`Welcome {intialState.name}!</NavbarHeading>
					<div>
						<Button className={Classes.MINIMAL} icon="home" text="logout" />
						<Button className={Classes.MINIMAL} icon="document" text="Files" />
					</div>
				</NavbarGroup>
			</Navbar>

		</div>
	);
};

export default NavbarComponent;
