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

    // let url =`/api/jobs?myjobs=${obj.pageNumber}`

    // if(obj.jobType)
    // {
    //     url = url + "&jobType=" + obj.jobType
    // }    
    // if(obj.salaryMax)
    // {
    //     url = url + "&salaryMax=" + obj.salaryMax
    // }
    // if(obj.duration)
    // {
    //     url = url + "&duration=" + obj.duration
    // }
    // if(obj.sort)
    // {
    //     url = url + "&sort=" + obj.sort
    // }
    
    
    return authFetchGet(`/api/jobs?myjobs=${obj.pageNumber}&jobType=${obj.searchOptions.jobType.fullTime}&salary=${obj.searchOptions.salary}&duration=${obj.searchOptions.duration}&asc=${obj.searchOptions.sort.salary}`, 'GET');
}

// Profile update -------->

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




export default createJob;