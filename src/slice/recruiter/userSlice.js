import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading: false,
    data: 'null',
    error: 'null',
    listData : []

}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
   GetUserRequest: function (state) {
        state.isloading = true;
      },
      SucGetUserRequest: function (state, { payload }) {
        state.isloading = false;
        state.data = payload;
      },
      FailGetUserRequest: function (state, { payload }) {
        state.isloading = false;
        state.error = payload;
      },

      

    PutUserRequest: function (state) {
      state.isloading = true;
    },
    SucPutUserRequest: function (state, { payload }) {
      state.isloading = false;
      state.data = payload;
    },
    FailPutUserRequest: function (state, { payload }) {
      state.isloading = false;
      state.error = payload;
    },

    //  recruiter Job Show Apply or not-------------->

    GetDataJobsApplyRequest: function (state) {
      state.isloading = true;
    },
    SucGetDataJobsApplyRequest: function (state, { payload }) {
      state.isloading = false;
      state.listData = payload;
    },
    FaiGetDataJobsApplyRequest: function (state, { payload }) {
      state.isloading = false;
      state.error = payload;
    },

    // Advanced search recruiter Job Show Apply or not-------------->

    AdvancedSeacrchJobsRequest: function (state) {
      state.isloading = true;
    },
    SucAdvancedSeacrchJobsRequest: function (state, { payload }) {
      state.isloading = false;
      state.listData = payload;
    },
    FaiAdvancedSeacrchJobsRequest: function (state, { payload }) {
      state.isloading = false;
      state.error = payload;
    },
  }
});


export const {FailGetUserRequest,FailPutUserRequest, GetUserRequest, PutUserRequest, SucGetUserRequest,SucPutUserRequest,
  GetDataJobsApplyRequest,FaiGetDataJobsApplyRequest,SucGetDataJobsApplyRequest,
  FaiAdvancedSeacrchJobsRequest,AdvancedSeacrchJobsRequest,SucAdvancedSeacrchJobsRequest
} = userSlice.actions

export default userSlice.reducer