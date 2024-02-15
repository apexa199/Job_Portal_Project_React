import { lazy } from 'react';
import Loadable from 'app/components/Loadable';
import { CreateJob } from './createJob';
import Profile from './profile';
import ListJobs from './listJobs';


const recruiterRoutes = [
  { path: '/recruiter/createJob', element: <CreateJob /> },
  { path: '/recruiter/profile', element: <Profile /> },
  { path: '/recruiter/listJobs', element: <ListJobs /> },

];

export default recruiterRoutes;
