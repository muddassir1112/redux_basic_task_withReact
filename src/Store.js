import { createStore } from "redux";
import reducer from "./reducers/cakeReducers";

const store = createStore(reducer)

export default store