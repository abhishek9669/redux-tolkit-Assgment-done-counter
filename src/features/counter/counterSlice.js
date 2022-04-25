import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";



const data ={
     data:10,
    value:[]
}



const counterFunction = createSlice({
    name:"abhishek",
    initialState:data,
    reducers:{
        increment:(state,action)=>{
            state.data = state.data + 1;
            console.log(state)

        },
        dcrement:(state,action)=>{
            state.data = state.data - 1;
            console.log(state.data)

        },
        add:(state,action)=>{
            state.data = state.data + action.payload;
            console.log(state.data)

        },
        subtract:(state,action)=>{
            console.log(state.data)
            state.data = state.data - action.payload;
           

        },
        showdata:(state,action)=>{            
            state.value.push(state.data)
        }

    }

})


export default counterFunction.reducer;

export const {increment,dcrement,add,subtract,showdata} = counterFunction.actions;