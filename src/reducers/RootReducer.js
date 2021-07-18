import { combineReducers } from "redux";
import RegionListReducer from "./RegionListReducer";

const RootReducer = combineReducers({
  RegionList: RegionListReducer,
});

export default RootReducer;