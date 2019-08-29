import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer";
import thunk from "redux-thunk";
//compose(applyMiddleware(thunk))
// creation of store and implements of middleware and thunk.
const storeFactory = (persist_state) => {
    return createStore(rootReducer, persist_state, compose(applyMiddleware(thunk)));
};

export default storeFactory

