import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading: false,
    data: 'null',
    error: 'null',

}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    UserRequest: function (state) {
        state.isloading = true;
      },
      SucUserRequest: function (state, { payload }) {
        state.isloading = false;
        state.data = payload;
      },
      FailUserRequest: function (state, { payload }) {
        state.isloading = false;
        state.error = payload;
      },

      

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
    }
  }
});


export const {SucUserRequest, UserRequest,FailUserRequest,GetUserRequest, SucGetUserRequest, FailGetUserRequest} = userSlice.actions

export default userSlice.reducer