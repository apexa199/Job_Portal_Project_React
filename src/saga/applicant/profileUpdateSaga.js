import { call, put, takeEvery } from 'redux-saga/effects';
import { AdvancedSearchEmployee, EndJobUpdate, GetProfileAppliData, PutProfileAppliData, RatingJobData, ViewEmployeeData } from 'service/recruiter/recruiterjob';
import { FailAdvancedSearchEmployeeRequest, FailEndJobDataRequest, FailGetApplicantUserDataRequest, FailGetProfileAppliRequest, FailPutProfileAppliRequest, FailRatingJobRequest, GetAdvancedSearchEmployeeRequest, GetApplicantUserDataRequest, GetEndJobDataRequest, GetProfileAppliRequest, GetRatingJobRequest, PutProfileAppliRequest, SucAdvancedSearchEmployeeRequest, SucEndJobDataRequest, SucGetApplicantUserDataRequest, SucGetProfileAppliRequest, SucPutProfileAppliRequest, SucRatingJobRequest } from 'slice/applicant/profileUpdateSlice';


function* GetProfileAppli(action) {
  try {
    let mydata = yield call(GetProfileAppliData, action.payload);
    yield put(SucGetProfileAppliRequest(mydata));
  } catch (error) {
    yield put(FailGetProfileAppliRequest(error));
  }
}

export function* watchGetProfileAppli() {
   yield takeEvery(GetProfileAppliRequest, GetProfileAppli);
}


function* PutProfileAppli(action) {
  try {
    let putdata = yield call(PutProfileAppliData, action.payload);
    yield put(SucPutProfileAppliRequest(putdata));

    } catch (error) {
    yield put(FailPutProfileAppliRequest(error));
  }
}

export function* watchPutProfileAppli() {
  return yield takeEvery(PutProfileAppliRequest, PutProfileAppli);
}

// accepted applicant data of employee------------------------->

function* GetApplicantUser(action) {
  try {
    let AcceptedData = yield call(ViewEmployeeData, action.payload);
    yield put(SucGetApplicantUserDataRequest(AcceptedData));
  } catch (error) {
    yield put(FailGetApplicantUserDataRequest(error));
  }
}

export function* watchGetApplicantUser() {
   yield takeEvery(GetApplicantUserDataRequest, GetApplicantUser);
}

//Advanced Search in Employee-------------------------->

function* GetAdvancedSearchEmployee(action) {
  try {
    let AdSearch = yield call(AdvancedSearchEmployee, action.payload);
    yield put(SucAdvancedSearchEmployeeRequest(AdSearch));
  } catch (error) {
    yield put(FailAdvancedSearchEmployeeRequest(error));
  }
}

export function* watchGetAdvancedSearchEmployee() {
   yield takeEvery(GetAdvancedSearchEmployeeRequest, GetAdvancedSearchEmployee);
}

// End Job Pop up--------------->

function* GetEndJobData(action) {
  try {
    let EndJob = yield call(EndJobUpdate, action.payload);
    yield put(SucEndJobDataRequest(EndJob));
  } catch (error) {
    yield put(FailEndJobDataRequest(error));
  }
}

export function* watchGetEndJobData() {
   yield takeEvery(GetEndJobDataRequest, GetEndJobData);
}

// Rating pop up--------------------------->

function* GetRatingJob(action) {
  try {
    let RateData = yield call(RatingJobData, action.payload);
    yield put(SucRatingJobRequest(RateData));
  } catch (error) {
    yield put(FailRatingJobRequest(error));
  }
}

export function* watchGetRatingJob() {
   yield takeEvery(GetRatingJobRequest, GetRatingJob);
}
