import {call,put,takeEvery } from "redux-saga/effects";
import { getJobData } from "service/recruiter/recruiterjob";
import { GetJobRequest, SucGetJobRequest, failGetJobRequest } from "slice/recruiter/getjobSlice";




function *getjob(action)
{
try{
    let mydata = yield call(getJobData, action.payload)
    yield put(SucGetJobRequest(mydata));
} 
catch(error){
    yield  put(failGetJobRequest(error));
}
}

export function *watchgetjob () 
{
    return yield takeEvery(GetJobRequest,getjob)
}   
