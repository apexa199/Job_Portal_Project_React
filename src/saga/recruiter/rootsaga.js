import { all } from 'redux-saga/effects';
import { watchcreatejob } from './createjobsaga';
import { watchgetjob } from './getjobsaga';
import {  watchuserget } from './usersaga';

function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(), watchuserget()]);
}

export default rootsaga;
