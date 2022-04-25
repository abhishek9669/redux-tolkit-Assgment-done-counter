import { configureStore } from "@reduxjs/toolkit";
import counterFunction from "../features/counter/counterSlice"


let store = configureStore({
    reducer:{
       rootreduser:counterFunction
    }
});

export default store;