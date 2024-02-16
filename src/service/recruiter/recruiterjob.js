import authFetch, { authFetchGet } from 'service/recruiter/authfetch';

// Create & list job start------->

const createJob = (data) => {

    return authFetch("/api/jobs",'Post', data)
}

export const getJobData = (pageId) => {

    return authFetchGet(`/api/jobs?myjobs=${pageId}`, 'GET');
}
//Craeate & list Job end----->

// For Profile update start-------->

export const GetUserData = (dataUser) => {

    return authFetch("/api/user",'Put', dataUser)
}

export const PutUserData = (data) => {

    return authFetchGet("/api/user",'GET', data)
}
// Profile update End------------->

export const deleteJobData = (pageId) => {

    return authFetchGet(`/api/job/${pageId}`, 'DELETE');
}


// Update popup-------->

export const getJobUpdateData = (data) => {

    return authFetchGet("/api/jobs",'GET', data)
}
export const putJobUpdateData = (dataupdate) => {

    return authFetch("/api/jobs",'Put', dataupdate)
}


export default createJob;