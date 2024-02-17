import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob } from './createjobsaga';
import { watchgetUpdate, watchputUpdate } from './updateJobSaga';
import { watchGetUser, watchPutUser } from './usersaga';



function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(),watchGetUser(),watchPutUser(),watchgetUpdate(),watchputUpdate() ]);
}

export default rootsaga;
