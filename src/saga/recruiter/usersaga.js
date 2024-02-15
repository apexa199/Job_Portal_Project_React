import { Call } from '@mui/icons-material';
import { put, takeEvery } from 'redux-saga/effects';
import {  userGetAPI } from 'service/recruiter/recruiterjob';
import { FailUserRequest, SucUserRequest, UserRequest } from 'slice/recruiter/userSlice';


function* userget(action) {
  try {
    let mydata = yield Call(userGetAPI, action.payload);
    yield put(SucUserRequest(mydata));
  } catch (error) {
    yield put(FailUserRequest (error));
  }
}

export function* watchuserget() {
  return yield takeEvery(UserRequest, userget);
}
