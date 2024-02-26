import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isloading: false,
    data: 'null',
    error: 'null',

}

const profileUpdateSlice = createSlice({
    name: "profileApplicant",
    initialState,
  reducers: {
    GetProfileAppliRequest: function (state) {
        state.isloading = true;
      },
      SucGetProfileAppliRequest: function (state, { payload }) {
        state.isloading = false;
        state.data = payload;
      },
      FailGetProfileAppliRequest: function (state, { payload }) {
        state.isloading = false;
        state.error = payload;
      },

      

    PutProfileAppliRequest: function (state) {
      state.isloading = true;
    },
    SucPutProfileAppliRequest: function (state, { payload }) {
      state.isloading = false;
      state.data = payload;
    },
    FailPutProfileAppliRequest: function (state, { payload }) {
      state.isloading = false;
      state.error = payload;
    }
}
});

export const {FailGetProfileAppliRequest,FailPutProfileAppliRequest,GetProfileAppliRequest,PutProfileAppliRequest,SucGetProfileAppliRequest,SucPutProfileAppliRequest,} = profileUpdateSlice.actions

export default profileUpdateSlice.reducer