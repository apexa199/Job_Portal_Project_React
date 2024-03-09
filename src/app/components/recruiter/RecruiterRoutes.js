import { CreateJob } from './createJob';
import Profile from './profile';
import ListJob from './listJobs';
import { AcceptedApplicant } from './AcceptedAppilcant';
import { Applications } from './ViewApplications';



const recruiterRoutes = [
  { path: '/recruiter/createJob', element: <CreateJob /> },
  { path: '/recruiter/profile', element: <Profile /> },
  { path: '/recruiter/listJobs', element: <ListJob /> },
  { path: '/recruiter/applications/:id', element: <Applications /> },
  { path: '/recruiter/acceptedapplicant', element: <AcceptedApplicant /> },

];

export default recruiterRoutes;
