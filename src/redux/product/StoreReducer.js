import { StorageApp } from "../../config/store"
import { STORE_TYPE } from "./StoreTypes"

const initialState = {
  cart: StorageApp.getCart(),
  user: StorageApp.getUser(),
}
export default function storeReducer(state = initialState, action) {
  switch (action.type) {
    case STORE_TYPE.EXIT_USER:
      return {
        cart: [],
        user: {},
      }
    case STORE_TYPE.SET_USER:
      return {
        ...state,
        user: action.payload,
      }
    case STORE_TYPE.SET_PAGINATE:
      return {
        ...state,
        cart: { ...state.paginate, ...action.payload },
      }
    //   cart
    case STORE_TYPE.ADD_COVERAGE:
      const newCart = [action.payload, ...state.cart]
      StorageApp.setItem({ cart: newCart })
      return {
        ...state,
        cart: newCart,
      }
    case STORE_TYPE.REMOVE_COVERAGE:
      const delCart = state.cart.filter((e) => e?.id !== action.payload.id)
      StorageApp.setItem({ cart: delCart })
      return {
        ...state,
        cart: delCart,
      }
    //
    default:
      return state
  }
}
