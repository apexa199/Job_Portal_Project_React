import { Call } from '@mui/icons-material';
import { takeEvery } from 'redux-saga/effects';
import createJob from 'service/recruiter/recruiterjob';
import { createJobFail, createJobRequest, createJobSuc } from 'slice/recruiter/createjobSlice';

function* createjob(action) {
  try {
    let mydata = yield Call(createJob, action.payload);
    yield createJobSuc(mydata);
  } catch (error) {
    yield createJobFail(error);
  }
}

export function* watchcreatejob() {
  return yield takeEvery(createJobRequest, createjob);
}
