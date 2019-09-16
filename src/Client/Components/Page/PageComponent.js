import React, {Fragment, PureComponent} from "react";
import styled from "styled-components";
import NavbarComponent from "../NavBar/NavBarComponent";
import {Icon,Intent,H3} from "@blueprintjs/core";
import SideBar from "../SideBar/SideBar";
import "../../css/main.css"
import PropTypes from 'prop-types';

const sticky = styled.div`
position: sticky;
top: 0;
background: white;
z-index: 100;
`;
const Container = styled.div`
display: flex;
flex-direction:column;
flex-wrap:wrap;
width: 100%;
height: 100%;
position:relative;
`;
const Child = styled.div`
display: flex;
flex-direction:row;
width: 100%;
height: 100%;
position:relative;
overflow: auto;
`;

const Part1 = styled.div`
width: 15%;
min-width: 250px;
min-height: min-content;
`;

const Part2 = styled.div`
min-height: min-content;
flex:1;
height: 100vh;
overflow: auto;
`;

const Header = styled.div`
padding: 20px;
display:flex;
flex-direction: row;
align-items: center;
`;
const Footer = styled.div`
    margin-bottom: 52px;
    background: #137cbd;
    padding: 4px;
    color: white;
    font-weight: 500;
    margin-top: 8px;
`;
const Component = styled.div`
 padding: 0 20px;
 min-height: 100vh;

`;
class PageComponent extends PureComponent{
    state={
        loading: false
    };
    render(){
        const {icon, pageHeader,children} =this.props;
        let set_icon = icon ? icon : "chart";
        let set_pageHeader = pageHeader ? pageHeader : "pageHeader prop not passed";
        let set_children =  children ? children : "props child not passed";
        return (
            <Fragment>
                <Container>
                    <NavbarComponent/>
                    <Child>
                        <Part1>
                            <SideBar/>
                        </Part1>
                        <Part2>
                            <Header>
                                <Icon icon={set_icon} iconSize={"24"} intent={Intent.NONE}/>
                                <h2 className={"bp3-heading"} style={{"marginLeft": "10px",marginTop: "10px"}}>
                                    {set_pageHeader}
                                </h2>
                            </Header>
                            <Component>
                                {set_children}
                            </Component>
                            <Footer>This is a Footer</Footer>
                        </Part2>
                    </Child>
                </Container>
            </Fragment>
        );
    }
}

export default PageComponent;