import { all } from 'redux-saga/effects';
import { watchcreatejob } from './createjobsaga';
import { watchgetjob } from './getjobsaga';
import {  watchgetUser, watchuserget } from './usersaga';
import { watchgetUpdate, watchputUpdate } from './updateJobSaga';



function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(), watchuserget(),watchgetUser(),watchgetUpdate(),watchputUpdate() ]);
}

export default rootsaga;
