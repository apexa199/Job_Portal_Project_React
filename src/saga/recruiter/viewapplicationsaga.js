

import { call, put, takeEvery } from "redux-saga/effects";
import { ViewApplications, ViewPutApplications } from "service/recruiter/recruiterjob";
import { FailViewGetJobRequest, FailViewPutJobRequest, SucViewGetJobRequest, SucViewPutJobRequest, ViewGetJobRequest, ViewPutJobRequest } from "slice/recruiter/viewapplicantSlice";

// Veiw Applications getData---------------->

function* viewgetjob(action) {
    try {
      let mydata = yield call(ViewApplications, action.payload);
      yield put(SucViewGetJobRequest(mydata));
     
    } catch (error) {
      yield put(FailViewGetJobRequest(error));
    }
  }
  
  export function* watchviewgetjob() {
    return yield takeEvery(ViewGetJobRequest, viewgetjob);
  }

  // Veiw Applications PutData---------------->

  function* viewputjob(action) {
    try {
      let mydata = yield call(ViewPutApplications, action.payload);
      yield put(SucViewPutJobRequest(mydata));
     
    } catch (error) {
      yield put(FailViewPutJobRequest(error));
    }
  }
  
  export function* watchviewputjob() {
    return yield takeEvery(ViewPutJobRequest, viewputjob);
  }