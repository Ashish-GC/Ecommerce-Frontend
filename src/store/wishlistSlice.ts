import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
    name:"wishlist",
    initialState:{showWishlist:false},
    reducers:{
        openWishlist(state){state.showWishlist=true},
        hideWishlist(state){state.showWishlist=false}
    }
}
)

export const wishlistActions = wishlistSlice.actions;