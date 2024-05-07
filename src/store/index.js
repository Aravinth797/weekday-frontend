// global store

import { configureStore } from "@reduxjs/toolkit"; 
import getJdSlice from "./slice/getJdSlice";
import filterSlice from "./slice/filterSlice";

export const store = configureStore({
    reducer : {
        getJdSlice,
        filterSlice
    }
});
