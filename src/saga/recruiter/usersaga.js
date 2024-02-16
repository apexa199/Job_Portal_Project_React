import { call, put, takeEvery } from 'redux-saga/effects';
import {  getUserData, userGet} from 'service/recruiter/recruiterjob';
import { FailGetUserRequest, FailUserRequest, GetUserRequest, SucGetUserRequest, SucUserRequest, UserRequest } from 'slice/recruiter/userSlice';


function* userget(action) {
  try {
    let mydata = yield call(userGet, action.payload);
    yield put(SucUserRequest(mydata));
  } catch (error) {
    yield put(FailUserRequest(error));
  }
}

export function* watchuserget() {
   yield takeEvery(UserRequest, userget);
}


function* getUser(action) {
  try {
    let mydata = yield call(getUserData, action.payload);
    yield put(SucGetUserRequest(mydata));
  } catch (error) {
    yield put(FailGetUserRequest(error));
  }
}

export function* watchgetUser() {
  return yield takeEvery(GetUserRequest, getUser);
}
