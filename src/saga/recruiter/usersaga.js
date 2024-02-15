import { Call } from '@mui/icons-material';
import { put, takeEvery } from 'redux-saga/effects';
import {  userGet} from 'service/recruiter/recruiterjob';
import { FailUserRequest, SucUserRequest, UserRequest } from 'slice/recruiter/userSlice';


function* userget(action) {
  try {
    let mydata = yield Call(userGet, action.payload);
    yield put(SucUserRequest(mydata));
  } catch (error) {
    yield put(FailUserRequest (error));
  }
}

export function* watchuserget() {
  return yield takeEvery(UserRequest, userget);
}
