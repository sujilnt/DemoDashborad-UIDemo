import React from "react";
import { NavbarGroup, NavbarHeading, NavbarDivider, Button, Navbar, Classes, Alignment } from "@blueprintjs/core";
const NavbarComponent = () => (
	<div>
		<Navbar>
			<NavbarGroup align={Alignment.RIGHT} className="main-page_nav">
				<NavbarHeading>Blueprint</NavbarHeading>
				<div>
					<Button className={Classes.MINIMAL} icon="home" text="Home" />
					<Button className={Classes.MINIMAL} icon="document" text="Files" />
				</div>
			</NavbarGroup>
		</Navbar>
	</div>
);

export default NavbarComponent;
