import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob } from './createjobsaga';
import { watchDeleteJob, watchgetUpdate, watchputUpdate } from './updateJobSaga';
import { watchGetUser, watchPutUser } from './usersaga';



function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(),watchGetUser(),watchPutUser(),watchgetUpdate(),watchputUpdate(), watchDeleteJob() ]);
}

export default rootsaga;
