import { lazy } from 'react';
import Loadable from 'app/components/Loadable';
import { CreateJob } from './createJob';
import Profile from './profile';
import ListJob from './listJobs';
import { Applications } from './applications';
import { AcceptedApplicant } from './AcceptedAppilcant';



const recruiterRoutes = [
  { path: '/recruiter/createJob', element: <CreateJob /> },
  { path: '/recruiter/profile', element: <Profile /> },
  { path: '/recruiter/listJobs', element: <ListJob /> },
  { path: '/recruiter/applications/:id', element: <Applications /> },
  { path: '/recruiter/acceptedapplicant', element: <AcceptedApplicant /> },

];

export default recruiterRoutes;
