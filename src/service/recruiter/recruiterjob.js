import authFetch, { authFetchGet } from 'service/recruiter/authfetch';

const createJobAPI = (data) => {

    return authFetch("/api/jobs",'Post', data)
}

export const getJobData = (pageId) => {

    return authFetchGet(`/api/jobs?myjobs=${pageId}`, 'GET');
}


export const userGetAPI = (data1) => {

    return authFetch("/api/user",'Put', data1)
}

export default createJobAPI;