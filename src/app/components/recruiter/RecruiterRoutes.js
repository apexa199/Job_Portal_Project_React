import { lazy } from 'react';
import Loadable from 'app/components/Loadable';
import { CreateJob } from './createJob';
import Profile from './profile';
import MyJobs from './MyJobs';


const recruiterRoutes = [
  { path: '/recruiter/createJob', element: <CreateJob /> },
  { path: '/recruiter/profile', element: <Profile /> },
  { path: '/recruiter/MyJobs', element: <MyJobs /> },

];

export default recruiterRoutes;
