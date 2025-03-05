import { configureStore } from "@reduxjs/toolkit";
import jobsReducer from "./jobSlice";
import applicationsReducer from "./applicationSlice";




export const store = configureStore({
    reducer: {
        jobs: jobsReducer,
        applications: applicationsReducer,
    },
});

export default store;