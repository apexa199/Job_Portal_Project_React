import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob, watchsearchgetjob, watchsearchgetjobAdvanced } from './createjobsaga';
import { watchDeleteJob, watchgetUpdate, watchputUpdate } from './updateJobSaga';
import { watchGetUser, watchPutUser } from './usersaga';
import { watchGetProfileAppli, watchPutProfileAppli } from 'saga/applicant/profileUpdateSaga';
import { watchviewgetjob } from './viewapplicationsaga';



function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(),watchGetUser(),watchPutUser(),watchgetUpdate(),watchputUpdate(), watchDeleteJob(),watchsearchgetjob(),
  watchsearchgetjobAdvanced(),watchGetProfileAppli(), watchPutProfileAppli(), watchviewgetjob()]);
}

export default rootsaga;
