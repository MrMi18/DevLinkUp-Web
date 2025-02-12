import { createSlice } from "@reduxjs/toolkit";

const feedSlice =  createSlice({
    name:"feed",
    initialState:[],
    reducers:{
        addFeed:(state,action) =>{
            return action.payload;  // it's same as a state = action.payload.
        },
        removeUserFeed:(state,action) =>{
            const newFeed = state.filter(user => user._id!== action.payload)
            return newFeed;
        }
    }
})

export const{addFeed,removeUserFeed} = feedSlice.actions;
export default feedSlice.reducer;