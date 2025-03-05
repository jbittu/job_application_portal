import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications:  [],
};

const applicationSlice = createSlice({
    name: "applications",
    initialState,
    reducers:{
        addApplication: (state, action) => {
            state.applications.push(action.payload);
        },
        updateApplication: (state, action) => {
            const {id, status} = action.payload;
            const existingApplication = state.applications.find(application => application.id === id);
            if(existingApplication){
                existingApplication.status = status;
            }
        },
        deleteApplication: (state, action) => {
            const id = action.payload;
            state.applications = state.applications.filter(application => application.id !== id);
        }
    }
});

export const { addApplication, updateApplication, deleteApplication } = applicationSlice.actions;
export default applicationSlice.reducer;