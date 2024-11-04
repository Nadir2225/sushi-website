import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: false
}

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        change: (state) => {
            state.theme = !state.theme
        }
    }
})
export const { change } = themeSlice.actions 
export default themeSlice.reducer;