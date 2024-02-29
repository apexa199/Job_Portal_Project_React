import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading :false,
    data:null,
    error:null,
    listData: []
    

}

const viewapplicationSlice = createSlice({
    name: 'application',
    initialState,
    reducers: {
        
    //View Applications---------------->

    ViewGetJobRequest: function (state) {
        state.isloading = true;
      },
      SucViewGetJobRequest: function (state, { payload }) {
        state.isloading = false;
      state.listData = payload;
      },
      FailViewGetJobRequest: function (state, { payload }) {
        state.isloading = false;
        state.error = payload;
      },
  }
  
  });
  
  export const {FailViewGetJobRequest,SucViewGetJobRequest,ViewGetJobRequest
  
  } = viewapplicationSlice.actions
  
  export default viewapplicationSlice.reducer;