import { ListJobApplicant } from "./ListJobApplicant";
import { ProfileApllicant } from "./ProfileApllicant";




const applicantRoutes = [
  { path: '/applicant/listjobapplicant', element: <ListJobApplicant /> },
  { path: '/applicant/profileapplicant', element: <ProfileApllicant /> },
 
  
];

export default applicantRoutes;
