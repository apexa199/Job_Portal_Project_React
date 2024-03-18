import { call, put, takeEvery } from 'redux-saga/effects';
import { AdvancedSearchEmployee, ApplicationJobData, ApplicationsRatingJobData, ApplyJobApplicantData, EndJobUpdate, GetApplicationsRatingJobData, GetProfileAppliData, PutProfileAppliData, PutRatingJobData, RatingJobData, ViewEmployeeData } from 'service/recruiter/recruiterjob';
import { ApplicationsRatingJobRequest, ApplyJobApplicantRequest, FailAdvancedSearchEmployeeRequest, FailApplicationsRatingJobRequest, FailApplyJobApplicant, FailEndJobDataRequest, FailGetApplicantUserDataRequest, FailGetApplicationsDataRequest, FailGetApplicationsRatingJobRequest, FailGetProfileAppliRequest, FailPutProfileAppliRequest, FailPutRatingJobRequest, FailRatingJobRequest, GetAdvancedSearchEmployeeRequest, GetApplicantUserDataRequest, GetApplicationsDataRequest, GetApplicationsRatingJobRequest, GetEndJobDataRequest, GetProfileAppliRequest, GetRatingJobRequest, PutProfileAppliRequest, PutRatingJobRequest, SucAdvancedSearchEmployeeRequest, SucApplicationsRatingJobRequest, SucApplyJobApplicant, SucEndJobDataRequest, SucGetApplicantUserDataRequest, SucGetApplicationsDataRequest, SucGetApplicationsRatingJobRequest, SucGetProfileAppliRequest, SucPutProfileAppliRequest, SucPutRatingJobRequest, SucRatingJobRequest } from 'slice/applicant/profileUpdateSlice';


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

// EMPLOYEEs End Job Pop up--------------->

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


// EMPLOYEEs Rating pop up--------------------------->

function* PutRatingJob(action) {
  try {
    let RateData = yield call(PutRatingJobData, action.payload);
    yield put(SucPutRatingJobRequest(RateData));
  } catch (error) {
    yield put(FailPutRatingJobRequest(error));
  }
}

export function* watchPutRatingJob() {
   yield takeEvery(PutRatingJobRequest, PutRatingJob);
}

//applications data get------------------------->

function* GetApplicationsData(action) {
  try {
    let ApplicationdData = yield call(ApplicationJobData, action.payload);
    yield put(SucGetApplicationsDataRequest(ApplicationdData));
  } catch (error) {
    yield put(FailGetApplicationsDataRequest(error));
  }
}
export function* watchGetApplicationsData() {
  yield takeEvery(GetApplicationsDataRequest, GetApplicationsData);
}

// Applications get/put rating data update------------------->

function* GetApplicationsRatingJob(action) {
  try {
    let RateDataGet = yield call(GetApplicationsRatingJobData, action.payload);
    yield put(SucGetApplicationsRatingJobRequest(RateDataGet));
  } catch (error) {
    yield put(FailGetApplicationsRatingJobRequest(error));
  }
}

export function* watchGetApplicationsRatingJob() {
   yield takeEvery(GetApplicationsRatingJobRequest, GetApplicationsRatingJob);
}

function* ApplicationsRatingJob(action) {
  try {
    let RateData = yield call(ApplicationsRatingJobData, action.payload);
    yield put(SucApplicationsRatingJobRequest(RateData));
  } catch (error) {
    yield put(FailApplicationsRatingJobRequest(error));
  }
}

export function* watchApplicationsRatingJob() {
   yield takeEvery(ApplicationsRatingJobRequest, ApplicationsRatingJob);
}

//Apply Applicant for job------------->

function* ApplyJobApplicant(action) {
  try {
    let mydata = yield call(ApplyJobApplicantData, action.payload);
    yield put(SucApplyJobApplicant(mydata));
  } catch (error) {
    yield put(FailApplyJobApplicant(error));
  }
}

export function* watchApplyJobApplicant() {
  return yield takeEvery(ApplyJobApplicantRequest, ApplyJobApplicant);
}
