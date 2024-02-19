import { call, put, takeEvery } from 'redux-saga/effects';
import {  GetUserData, PutUserData} from 'service/recruiter/recruiterjob';
import { FailGetUserRequest, FailPutUserRequest, GetUserRequest, PutUserRequest, SucGetUserRequest, SucPutUserRequest } from 'slice/recruiter/userSlice';


function* GetUser(action) {
  try {
    let mydata = yield call(GetUserData, action.payload);
    yield put(SucGetUserRequest(mydata));
  } catch (error) {
    yield put(FailGetUserRequest(error));
  }
}

export function* watchGetUser() {
   yield takeEvery(GetUserRequest, GetUser);
}


function* PutUser(action) {
  try {
    let mydata = yield call(PutUserData, action.payload);
    yield put(SucPutUserRequest(mydata));

    } catch (error) {
    yield put(FailPutUserRequest(error));
  }
}

export function* watchPutUser() {
  return yield takeEvery(PutUserRequest, PutUser);
}
