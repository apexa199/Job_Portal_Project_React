import { lazy } from 'react';
import Loadable from 'app/components/Loadable';
import { CreateJob } from './createJob';
import Profile from './profile';
import { ListJobs } from './listJobs';
import MyJobs from './myJobs';

const recruiterRoutes = [
  { path: '/recruiter/createJob', element: <CreateJob /> },
  { path: '/recruiter/profile', element: <Profile /> },
  { path: '/recruiter/listJobs', element: <ListJobs /> },
  { path: '/recruiter/myJobs', element: <MyJobs /> }
];

export default recruiterRoutes;
