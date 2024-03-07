import { call, put, takeEvery } from 'redux-saga/effects';
import { GetProfileAppliData, PutProfileAppliData, ViewEmployeeData } from 'service/recruiter/recruiterjob';
import { FailGetApplicantUserDataRequest, FailGetProfileAppliRequest, FailPutProfileAppliRequest, GetApplicantUserDataRequest, GetProfileAppliRequest, PutProfileAppliRequest, SucGetApplicantUserDataRequest, SucGetProfileAppliRequest, SucPutProfileAppliRequest } from 'slice/applicant/profileUpdateSlice';


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
    let mydata = yield call(PutProfileAppliData, action.payload);
    yield put(SucPutProfileAppliRequest(mydata));

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
    let mydata = yield call(ViewEmployeeData, action.payload);
    yield put(SucGetApplicantUserDataRequest(mydata));
  } catch (error) {
    yield put(FailGetApplicantUserDataRequest(error));
  }
}

export function* watchGetApplicantUser() {
   yield takeEvery(GetApplicantUserDataRequest, GetApplicantUser);
}