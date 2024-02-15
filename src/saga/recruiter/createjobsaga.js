import { Call } from '@mui/icons-material';
import { put, takeEvery } from 'redux-saga/effects';
import createJobAPI from 'service/recruiter/recruiterjob';
import { createJobFail, createJobRequest, createJobSuc } from 'slice/recruiter/createjobSlice';

function* createjob(action) {
  try {
    let mydata = yield Call(createJobAPI, action.payload);
    yield put(createJobSuc(mydata));
  } catch (error) {
    yield put(createJobFail(error));
  }
}

export function* watchcreatejob() {
  return yield takeEvery(createJobRequest, createjob);
}
