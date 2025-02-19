import { configureStore } from '@reduxjs/toolkit'
import headerSlice from './redux/Slices/headerSlice'
import modalSlice from './redux/Slices/modalSlice'
import rightDrawerSlice from './redux/Slices/rightDrawerSlice'
import leadsSlice from './redux/Slices/leadSlice'

const combinedReducer = {
  header : headerSlice,
  rightDrawer : rightDrawerSlice,
  modal : modalSlice,
  lead : leadsSlice
}

export default configureStore({
    reducer: combinedReducer
})