import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading :false,
    data:"null",
    error:"null",
    listData : []

}

const getjobslice = createSlice({
  name: 'getJobs',
  initialState,
  reducers: {
   

    GetJobRequest :function(state)
    {
    state.isloading = true;
   
    },
    SucGetJobRequest :function(state,{payload})
    {
    state.isloading = false;
    state.listData = payload;
   
    },
    failGetJobRequest :function(state,{payload})
    {
    state.isloading = false;
    state.error = payload;
   
    }
}

});

export const {SucGetJobRequest,failGetJobRequest,GetJobRequest} = getjobslice.actions

export default getjobslice.reducer;