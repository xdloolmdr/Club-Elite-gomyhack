import { configureStore } from "@reduxjs/toolkit";
import headerSlice from "./Slices/headerSlice";
import modalSlice from "./Slices/modalSlice";
import rightDrawerSlice from "./Slices/rightDrawerSlice";
import leadsSlice from "./Slices/leadSlice";
import userSlice from "./Slices/user";

export default configureStore({
  reducer: {
    header: headerSlice,
    rightDrawer: rightDrawerSlice,
    modal: modalSlice,
    lead: leadsSlice,
    user: userSlice,
  },
});
