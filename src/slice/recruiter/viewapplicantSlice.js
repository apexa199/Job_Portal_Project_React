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
        
    //View Applications getdata---------------->

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

       //View Applications putdata---------------->

    ViewPutJobRequest: function (state) {
      state.isloading = true;
    },
    SucViewPutJobRequest: function (state, { payload }) {
      state.isloading = false;
    state.listData = payload;
    },
    FailViewPutJobRequest: function (state, { payload }) {
      state.isloading = false;
      state.error = payload;
    },
  }
  
  });
  
  export const {FailViewGetJobRequest,SucViewGetJobRequest,ViewGetJobRequest,FailViewPutJobRequest, SucViewPutJobRequest,ViewPutJobRequest
  
  } = viewapplicationSlice.actions
  
  export default viewapplicationSlice.reducer;