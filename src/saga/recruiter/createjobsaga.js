import { call, put, takeEvery } from 'redux-saga/effects';
import createJob from 'service/recruiter/recruiterjob';

import { createJobFail, createJobRequest, createJobSuc } from 'slice/recruiter/createjobSlice';

function* createjob(action) {
  try {
    let mydata = yield call(createJob, action.payload);
    yield put(createJobSuc(mydata));
  } catch (error) {
    yield put(createJobFail(error));
  }
}

export function* watchcreatejob() {
  return yield takeEvery(createJobRequest, createjob);
}
