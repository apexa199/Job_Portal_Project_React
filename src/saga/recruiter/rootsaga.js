import { all } from 'redux-saga/effects';
import { watchcreatejob } from './createjobsaga';
import { watchgetjob } from './getjobsaga';
import {  watchgetUser, watchuserget } from './usersaga';

function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(), watchuserget(),watchgetUser()]);
}

export default rootsaga;
