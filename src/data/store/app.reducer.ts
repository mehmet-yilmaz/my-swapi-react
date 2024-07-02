import { combineReducers } from "redux";
import appReducer from "./app.slice";
import { IAppState } from "./app.state";

export interface IRootState {
  app: IAppState;
}

const reducer = combineReducers({
  app: appReducer,
});

export default reducer;
