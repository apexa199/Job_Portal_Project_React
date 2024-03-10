import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob, watchsearchgetjob, watchsearchgetjobAdvanced } from './createjobsaga';
import { watchDeleteJob, watchgetUpdate, watchputUpdate } from './updateJobSaga';
import { watchGetUser, watchPutUser } from './usersaga';
import { watchGetAdvancedSearchEmployee, watchGetApplicantUser, watchGetEndJobData, watchGetProfileAppli, watchGetRatingJob, watchPutProfileAppli, watchPutRatingJob } from 'saga/applicant/profileUpdateSaga';
import { advancedwatchgetviwjobs, watchviewgetjob } from './viewapplicationsaga';



function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(),watchGetUser(),watchPutUser(),watchgetUpdate(),watchputUpdate(), watchDeleteJob(),watchsearchgetjob(),
  watchsearchgetjobAdvanced(),watchGetProfileAppli(), watchPutProfileAppli(), advancedwatchgetviwjobs(), watchviewgetjob(),watchGetApplicantUser()
,watchGetAdvancedSearchEmployee(),watchGetRatingJob(),watchGetEndJobData(),watchPutRatingJob()]);
}

export default rootsaga;
