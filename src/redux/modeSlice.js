import { createSlice } from '@reduxjs/toolkit';

const modeSlice = createSlice({
    name: 'mode',
    initialState: {
        mode: 'light',
    },
    reducers:{
        toggle: (state)=>{
            state.mode = state.mode === 'light' ? 'dark' : 'light';
        }
    }
})

export const { toggle } = modeSlice.actions;
export default modeSlice.reducer;