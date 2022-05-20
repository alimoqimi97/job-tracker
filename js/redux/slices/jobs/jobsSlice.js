import { createSlice } from '@reduxjs/toolkit'


export const jobsSlice = createSlice({
    name: 'counter',
    initialState: {
        jobs: [],
        bookmarks: [],
        filters: {
            role: '',
            level: '',
            languages: [],
            tools: [],
        }
    },
    reducers: {
        setFilters: (state, action) => {
            const newFilters = action.payload;
            state.filters = newFilters;
        },
        addToBookmarks: (state,action) => {
            const bookmarkedId = action.payload;

            state.bookmarks.push(bookmarkedId);
        },
        setJobs: (state,action) => {
            const allJobs = action.payload;
            state.jobs = allJobs;
        }
    },
})

export const { setFilters , addToBookmarks} = jobsSlice.actions;

export default jobsSlice.reducer;