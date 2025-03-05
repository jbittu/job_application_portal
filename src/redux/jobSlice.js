import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    jobs: [
        { id: 1, title: "Software Engineer", company: "Google", description: "Build amazing apps." },
        { id: 2, title: "Data Scientist", company: "Facebook", description: "Analyze large datasets." },
        { id: 3, title: "Product Manager", company: "Amazon", description: "Manage product development." },
        {id: 4, title: "Software Engineer", company: "Microsoft", description: "Build amazing apps." },
        {id: 5, title: "Data Scientist", company: "Apple", description: "Analyze large datasets." },
    ],
};

const jobSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {
      
    },
});

export default jobSlice.reducer;