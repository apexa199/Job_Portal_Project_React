import { da } from 'date-fns/locale';
import authFetch, { authFetchGet } from 'service/recruiter/authfetch';

// Create & list job start------->

const createJob = (data) => {

    return authFetch("/api/jobs",'Post', data)
}

export const getJobData = (pageId) => {

    return authFetchGet(`/api/jobs?myjobs=${pageId}`, 'GET');
}

//Search Job ------------>

export const getJobDataSearch = (obj) => {

    
    return authFetchGet(`/api/jobs?myjobs=${obj.pageNumber}&q=${obj.searchTerm}`, 'GET');
}

// Advanced job search------------>

export const getJobDataSearchAdvanced = (obj) => {

     let url =`/api/jobs?myjobs=${obj.pageNumber}`

    if(obj.jobType.fullTime)
    {
        url = url + "&jobType=" + "Full Time"
    }  
    if(obj.jobType.partTime)
    {
        url = url + "&jobType=" + "Part Time"
    }   
    if(obj.jobType.wfh)
    {
        url = url + "&jobType=" + "Work From Home"
    }    
    if(obj.salary && obj.salary.length> 0)
    {
        if(obj.salary[1] >0)
        {
        url = url + "&salaryMin=" + obj.salary[0]
        url = url + "&salaryMax=" + obj.salary[1]
        }
    }
    if(obj.duration && obj.duration != "0")
    {
        url = url + "&duration=" + obj.duration
    }
    if(obj.sort.salary)
    {
        if(obj.sort.salary.desc)
        {
        url = url + "&desc=" + "salary"
        }
        else
        {
            url = url + "&asc=" + "salary" 
        }
    }

    if(obj.sort.duration)
    {
        if(obj.sort.duration.desc)
        {
        url = url + "&desc=" + "duration"
        }
        else
        {
            url = url + "&asc=" + "duration" 
        }
    }

    if(obj.sort.rating)
    {
        if(obj.sort.rating.desc)
        {
        url = url + "&desc=" + "rating"
        }
        else
        {
            url = url + "&asc=" + "rating" 
        }
    }
    
    return authFetchGet(url, 'GET');
    
}

// Veiw Application--------------->

export const ViewApplications =(id) =>
{

    return authFetchGet(`/api/applicants?jobId=${id}&desc=dateOfApplication`,'GET')
}

// Veiw Put Data Application--------------->

export const ViewPutApplications =(id,data) =>
{

    return authFetch(`/api/applicants?jobId=${id}&desc=dateOfApplication`,'Put',data)
}


// Profile update ---------------->

export const PutUserData = (dataUser) => {

    return authFetch("/api/user",'Put', dataUser)
}

export const GetUserData = (data) => {

    return authFetchGet("/api/user",'GET', data)
}

// Profile Applicant update------------>


export const GetProfileAppliData = (dataUser) => {

    return authFetchGet("/api/user",'GET', dataUser)
}

export const PutProfileAppliData = (data) => {

    return authFetch("/api/user",'PUT', data)
}


// Update List Data popup-------->

export const getJobUpdateData = (data) => {

    return authFetchGet("/api/jobs/"+data,'GET');
}
export const putJobUpdateData = (data) => {

    return authFetch(`/api/jobs/${data._id}`,'Put',data)
}


//Delete list Data popup ------------->

export const deleteJobData = (id) => {

    return authFetchGet(`/api/jobs/${id}`, 'DELETE');
}

// Filter popup for Applicant-------------------->

export const AdvancedFilterApplicant = (obj)=>{

    let url =`api/applicants?jobId==${obj.jobId}`

    if(obj.status.all)
    {
        url = url + "&status=" + "rejected"
    }  
    if(obj.status.applied)
    {
        url = url + "&status=" + "applied"
    }   
    if(obj.status.shortlisted)
    {
        url = url + "&status=" + "shortlisted"
    }    
       
    if(obj.sort["jobApplicant.name"])
    {
        if(obj.sort["jobApplicant.name"].desc == true)
        {
        url = url + "&desc=" + "jobApplicant.name"
        }
        else
        {
            url = url + "&asc=" + "jobApplicant.name" 
        }

    }

    if(obj.sort["jobApplicant.rating"])
    {
        if(obj.sort["jobApplicant.rating"].desc == true)
        {
        url = url + "&desc=" + "jobApplicant.rating"
        }
        else
        {
            url = url + "&asc=" + "jobApplicant.rating" 
        }

    }

    if(obj.sort["dateOfApplication"])
    {
        if(obj.sort["dateOfApplication"].desc == true)
        {
        url = url + "&desc=" + "dateOfApplication"
        }
        else
        {
            url = url + "&asc=" + "dateOfApplication" 
        }

    }


  return   authFetchGet(url, 'GET');;

}


export default createJob;