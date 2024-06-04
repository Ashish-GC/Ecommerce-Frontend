import { createSlice } from "@reduxjs/toolkit";

 export const searchBarSlice =createSlice({
    name:"search",
    initialState:{showSearchBar:false},
    reducers:{
        openSearchBar(state){state.showSearchBar = true},
        hideSearchBar(state){state.showSearchBar =false }
    }
 })

 export const searchBarActions = searchBarSlice.actions;