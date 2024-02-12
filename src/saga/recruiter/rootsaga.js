import { all } from 'redux-saga/effects';
import { watchcreatejob } from './createjobsaga';
import { watchgetjob } from './getjobsaga';

function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob()]);
}

export default rootsaga;
