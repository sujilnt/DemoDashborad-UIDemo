import React from "react";
import { NavbarGroup, NavbarHeading, NavbarDivider, Button, Navbar, Classes, Alignment } from "@blueprintjs/core";
const NavbarComponent = () => (
	<div>
		<Navbar>
			<NavbarGroup align={Alignment.LEFT}>
				<NavbarHeading>Blueprint</NavbarHeading>
				<NavbarDivider />
				<Button className={Classes.MINIMAL} icon="home" text="Home" />
				<Button className={Classes.MINIMAL} icon="document" text="Files" />
			</NavbarGroup>
		</Navbar>
	</div>
);

export default NavbarComponent;
