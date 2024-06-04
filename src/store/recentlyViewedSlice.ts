import { createSlice } from "@reduxjs/toolkit";

export const recentlyViewedSlice = createSlice({
    name:"recentlyViewed",
    initialState:{showRecentlyViewed:false},
    reducers:{
        openrecentlyViewed(state){state.showRecentlyViewed=true},
        hiderecentlyViewed(state){state.showRecentlyViewed=false}
    }
}
)

export const recentlyViewedActions = recentlyViewedSlice.actions;