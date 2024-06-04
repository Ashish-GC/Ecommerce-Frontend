import { configureStore } from "@reduxjs/toolkit";
import { sidebarSlice } from "./sidebarSlice";
import { searchBarSlice } from "./searchBarSlice";
import { wishlistSlice } from "./wishlistSlice";
import { recentlyViewedSlice } from "./recentlyViewedSlice";

export const store = configureStore({
  reducer: {
    sidebar: sidebarSlice.reducer,
    searchBar: searchBarSlice.reducer,
    wishlist: wishlistSlice.reducer,
    recentlyViewed: recentlyViewedSlice.reducer,
  },
});
export type IRootState = ReturnType<typeof store.getState>;
