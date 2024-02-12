import createSagaMiddleware from "@redux-saga/core";
import { configureStore } from "@reduxjs/toolkit";
import rootsaga from "saga/recruiter/rootsaga";
import createjobslice from "slice/recruiter/createjobSlice";
import getjobSlice from "slice/recruiter/getjobSlice";


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    jobs : createjobslice,
    getJobs : getjobSlice
  },
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootsaga);
export default store;