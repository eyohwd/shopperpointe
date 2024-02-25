import {combineReducers, configureStore} from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userSlice"


const rootReducer = combineReducers({
    cart: cartReducer,
    user: userReducer
})

export default configureStore({
    reducer: rootReducer
})