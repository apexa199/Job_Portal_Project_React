import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading: false,
    data: 'null',
    error: 'null',
}

const updatejobSlice = createSlice({
  name: "updateJob",
  initialState,
  reducers: {
   GetUpdateRequest: function (state) {
        state.isloading = true;
      },
      SucGetUpdateRequest: function (state, { payload }) {
        state.isloading = false;
        state.data = payload;
      },
      FailGetUpdateRequest: function (state, { payload }) {
        state.isloading = false;
        state.error = payload;
      },

      
      PutUpdateRequest: function (state) {
        state.isloading = true;
      },
      SucPutUpdateRequest: function (state, { payload }) {
        state.isloading = false;
        state.data = payload;
      },
      FailPutUpdateRequest: function (state, { payload }) {
        state.isloading = false;
        state.error = payload;
      },


     
  }
});

export const {FailGetUpdateRequest, FailPutUpdateRequest,PutUpdateRequest, GetUpdateRequest, SucGetUpdateRequest,SucPutUpdateRequest} = updatejobSlice.actions

export default updatejobSlice.reducer