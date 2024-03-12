import { all } from 'redux-saga/effects';
import { watchcreatejob, watchgetjob, watchsearchgetjob, watchsearchgetjobAdvanced } from './createjobsaga';
import { watchDeleteJob, watchgetUpdate, watchputUpdate } from './updateJobSaga';
import { watchAdvancedSeacrchJobs, watchGetDataJobsApply, watchGetUser, watchPutUser } from './usersaga';
import { watchApplicationsRatingJob, watchGetAdvancedSearchEmployee, watchGetApplicantUser, watchGetApplicationsData,
   watchGetApplicationsRatingJob,
   watchGetEndJobData, watchGetProfileAppli, watchPutProfileAppli, watchPutRatingJob } from 'saga/applicant/profileUpdateSaga';
import { advancedwatchgetviwjobs, watchviewgetjob } from './viewapplicationsaga';



function* rootsaga() {
  return yield all([watchcreatejob(), watchgetjob(),watchGetUser(),watchPutUser(),watchgetUpdate(),watchputUpdate(), watchDeleteJob(),watchsearchgetjob(),
  watchsearchgetjobAdvanced(),watchGetProfileAppli(), watchPutProfileAppli(), advancedwatchgetviwjobs(), watchviewgetjob(),watchGetApplicantUser()
,watchGetAdvancedSearchEmployee(),watchGetEndJobData(),watchPutRatingJob(), watchGetApplicationsData(),watchGetDataJobsApply(),
watchAdvancedSeacrchJobs(),watchApplicationsRatingJob(),watchGetApplicationsRatingJob()]);
}

export default rootsaga;
