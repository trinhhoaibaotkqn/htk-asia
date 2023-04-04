import { createSlice } from '@reduxjs/toolkit'

const commonSlice = createSlice({
    name: 'common',
    initialState: {
        language: "en"
    },
    reducers: {
        CHANGE_LANGUAGE: (state, action) => {
            state.language = action.payload
        },
    },
})

export const { CHANGE_LANGUAGE } = commonSlice.actions;

export default commonSlice.reducer;