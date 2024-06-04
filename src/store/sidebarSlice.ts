import { createSlice } from '@reduxjs/toolkit'

 export const sidebarSlice = createSlice({
     name:"sidebar",
     initialState:{showSidebar:false},
     reducers:{
        openSidebar(state){
            state.showSidebar=true
        },
        closeSidebar(state){
            state.showSidebar =false
        }
     }
})

export const sidebarActions = sidebarSlice.actions

 


