import { call, put, takeEvery } from 'redux-saga/effects';
import { getJobUpdateData, putJobUpdateData } from 'service/recruiter/recruiterjob';
import { FailGetUpdateRequest, FailPutUpdateRequest, GetUpdateRequest, PutUpdateRequest, SucGetUpdateRequest, SucPutUpdateRequest } from 'slice/recruiter/updatejobSlice';



function* getUpdate(action) {
  try {
    let mydata = yield call(getJobUpdateData, action.payload);
    yield put(SucGetUpdateRequest(mydata));
  } catch (error) {
    yield put(FailGetUpdateRequest(error));
  }
}

export function* watchgetUpdate() {
  return yield takeEvery(GetUpdateRequest, getUpdate);
}


function* putUpdate(action) {
  try {
    let mydata = yield call(putJobUpdateData, action.payload);
    yield put(SucPutUpdateRequest(mydata));
  } catch (error) {
    yield put(FailPutUpdateRequest(error));
  }
}

export function* watchputUpdate() {
 return yield takeEvery(PutUpdateRequest, putUpdate);
}



