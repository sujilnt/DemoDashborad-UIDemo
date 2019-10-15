import React, { PureComponent } from "react";
import Page from "../Page/PageComponent";
import { Suggest } from "@blueprintjs/select";
import { MenuItem } from "@blueprintjs/core";
const items = [1, 2, 3, 4, 5];
class SearchContainer extends PureComponent{

    render(){
        let value= 2, setValue=()=>console.log("hello");
        return(
            <Page icon={"search-template"} pageHeader={"Sensor Information"}>
                <Suggest
                    inputValueRenderer={item => item.toString()}
                    items={items}
                    selectedItem={value}
                    itemRenderer={(item, { modifiers, handleClick }) => (
                        <MenuItem
                            active={modifiers.active}
                            onClick={handleClick}
                            text={item}
                            key={item}
                        />
                    )}
                    onItemSelect={setValue}
                />
            </Page>
        );
    }

}
export default SearchContainer;