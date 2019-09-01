import React, {Fragment, PureComponent} from "React";
import styled from "styled-components";
import NavbarComponent from "../NavBar/NavBarComponent";
import {Icon,Intent} from "@blueprintjs/core";
import SideBar from "../SideBar/SideBar";
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
padding: 0 20px;
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
 height: 100vh;
`;
class Page extends PureComponent{
    state={
        loading: false
    };
    render(){
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
                                <Icon icon={"chart"} iconSize={"18"} intent={Intent.NONE}/>
                                <h2 style={{"marginLeft": "10px"}}>{this.props.pageheader || "PageHeader"}</h2>
                            </Header>
                            <Component>
                                What is Lorem Ipsum?
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

                                Why do we use it?
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                                Where does it come from?
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

                                The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

                                Where can I get some?
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

                                5
                                paragraphs
                                words
                                bytes
                                lists
                                Start with 'Lorem
                                ipsum dolor sit amet...'

                            </Component>
                            <Footer>This is a Footer</Footer>
                        </Part2>
                    </Child>
                </Container>
            </Fragment>
        );
    }
}

export default Page;