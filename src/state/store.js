import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; // helps in executing asynchronous function
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk))

export default store;