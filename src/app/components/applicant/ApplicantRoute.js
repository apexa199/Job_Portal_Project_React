import { Applications } from "../recruiter/applications";
import { ListJobApplicant } from "./ListJobApplicant";
import { ProfileApllicant } from "./ProfileApllicant";




const applicantRoutes = [
  { path: '/applicant/listjobapplicant', element: <ListJobApplicant /> },
  { path: '/applicant/profileapplicant', element: <ProfileApllicant /> },
  { path: '/applicant/appliactions', element: <Applications /> },
 
  
];

export default applicantRoutes;
