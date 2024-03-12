import { call, put, takeEvery } from 'redux-saga/effects';
import {  GetUserData, JobGetData, JobsDataSearchAdvanced, PutUserData} from 'service/recruiter/recruiterjob';
import { FaiAdvancedSeacrchJobsRequest, FaiGetDataJobsApplyRequest, FailGetUserRequest, FailPutUserRequest, AdvancedSeacrchJobsRequest, GetDataJobsApplyRequest, GetJobApplyRequest, GetUserRequest, PutUserRequest, SucAdvancedSeacrchJobsRequest, SucGetDataJobsApplyRequest, SucGetJobApplyRequest, SucGetUserRequest, SucPutUserRequest } from 'slice/recruiter/userSlice';


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


// Job Get recruiter Apply or not-------------->

function* GetDataJobsApply(action) {
  try {
    let mydata = yield call(JobGetData, action.payload);
    yield put(SucGetDataJobsApplyRequest(mydata));
  } catch (error) {
    yield put(FaiGetDataJobsApplyRequest(error));
  }
}

export function* watchGetDataJobsApply() {
   yield takeEvery(GetDataJobsApplyRequest, GetDataJobsApply);
}

// Advance Searched Job Get recruiter Apply or not-------------->

function* AdvancedSeacrchJobs(action) {
  try {
    let mydata = yield call(JobsDataSearchAdvanced, action.payload);
    yield put(SucAdvancedSeacrchJobsRequest(mydata));
  } catch (error) {
    yield put(FaiAdvancedSeacrchJobsRequest(error));
  }
}

export function* watchAdvancedSeacrchJobs() {
   yield takeEvery(AdvancedSeacrchJobsRequest, AdvancedSeacrchJobs);
}