import React from "react";
import { Spinner,Intent } from "@blueprintjs/core";

const Loader = ()=>{
    return(<Spinner size={"65"} intent={Intent.PRIMARY} className={"height80 width90"} />);
};
export default  Loader;