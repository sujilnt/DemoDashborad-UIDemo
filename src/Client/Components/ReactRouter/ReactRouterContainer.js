import React, {Fragment} from "react";
import {useSelector,useDispatch} from "react-redux";
import ReactRouter from "./ReactRouter";

const updatedStore = (dispatcher, actionCreater) => {
    console.log("dispatcher is called",dispatcher,actionCreater);
    dispatcher(actionCreater);
};
const ReactRouterContainer = ()=>{
    const intialState =  useSelector(state=> state),
        {isAuthenticated} = intialState,
        dispatch = useDispatch();
    console.log("%c React-Router-Container ", "background: #222; color: #bada55");
    return (
        <Fragment>
            <ReactRouter
                dispatchFunc={(actionCreator)=> updatedStore(dispatch,actionCreator)}
                isAuthenticated={isAuthenticated}
                store={intialState}
            />
        </Fragment>
    );

};
export default ReactRouterContainer;
