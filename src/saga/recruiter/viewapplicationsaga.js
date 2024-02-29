// Veiw Applications---------------->

import { call, put, takeEvery } from "redux-saga/effects";
import { ViewApplications } from "service/recruiter/recruiterjob";
import { FailViewGetJobRequest, SucViewGetJobRequest, ViewGetJobRequest } from "slice/recruiter/viewapplicantSlice";


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