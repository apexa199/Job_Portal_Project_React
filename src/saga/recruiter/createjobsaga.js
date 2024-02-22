import { toast } from 'react-toastify';
import { call, put, takeEvery } from 'redux-saga/effects';
import createJob, { getJobData, getJobDataSearch } from 'service/recruiter/recruiterjob';
import { FailGetJobRequest,createJobFail, createJobRequest, createJobSuc,  getJobRequest, searchFailGetJobRequest, searchgetJobRequest, searchsucGetJobRequest, sucGetJobRequest } from 'slice/recruiter/createjobSlice';

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


function* getjob(action) {
  try {
    let mydata = yield call(getJobData, action.payload);
    yield put(sucGetJobRequest(mydata));
   
  } catch (error) {
    yield put(FailGetJobRequest(error));
  }
}

export function* watchgetjob() {
  return yield takeEvery(getJobRequest, getjob);
}



function* searchgetjob(action) {
  try {
    let mydata = yield call(getJobDataSearch, action.payload);
    yield put(searchsucGetJobRequest(mydata));
   
  } catch (error) {
    yield put(searchFailGetJobRequest(error));
  }
}

export function* watchsearchgetjob() {
  return yield takeEvery(searchgetJobRequest, searchgetjob);
}