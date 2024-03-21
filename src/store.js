import { combineReducers, createStore } from "redux";
import cartReducer from "./features/main/ProductPageSlice";

const rootReducer = combineReducers({
  cart: cartReducer,
});

const store = createStore(rootReducer);

export default store;
