import { combineReducers } from "redux";
import {completedReducer} from "./completedReducer";
import {kybReducer} from './kybReducer';
import {ciReducer} from './ciReducer';
import { ctiReducer } from "./ctiReducer";
import { kycReducer } from "./kycReducer";
import { sdReducer } from "./sdReducer";
export default combineReducers({
  completedReducer,
  kybReducer, 
  ciReducer,
  ctiReducer,
  kycReducer,
  sdReducer
});
