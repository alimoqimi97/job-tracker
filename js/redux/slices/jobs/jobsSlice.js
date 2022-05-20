import { createSlice } from '@reduxjs/toolkit'


export const jobsSlice = createSlice({
    name: 'counter',
    initialState: {
        jobs: [],
        bookmarks: [],
        likedJobs: [],
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
            const bookmarked = action.payload;

            state.bookmarks.push(bookmarked);
        },
        setJobs: (state,action) => {
            const allJobs = action.payload;
            state.jobs = allJobs;
        },
        addToLikedJobs: (state, action) => {
            const likedJob = action.payload;

            state.likedJobs.push(likedJob);
        }
    },
})

export const { setFilters , addToBookmarks, setJobs, addToLikedJobs} = jobsSlice.actions;

export default jobsSlice.reducer;