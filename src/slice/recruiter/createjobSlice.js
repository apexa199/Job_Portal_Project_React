import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading :false,
    data:"null",
    error:"null"
    

}

const createjobslice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    createJobRequest :function(state)
    {
    state.isloading = true
    },
    createJobSuc :function(state,{payload})
    {
    state.isloading = false;
    state.data = payload;
    },
    createJobFail :function(state,{payload})
    {
    state.isloading = false;
    state.error = payload;
    },
}

});

export const {createJobFail,createJobRequest,createJobSuc} = createjobslice.actions

export default createjobslice.reducer;