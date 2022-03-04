import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import storeReducer from "./product/StoreReducer"

const middleWare = [thunk]
const rootReducer = combineReducers({
  storeReducer,
})
const store = createStore(rootReducer, applyMiddleware(...middleWare))
export default store
