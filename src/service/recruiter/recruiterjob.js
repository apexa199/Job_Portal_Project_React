import authFetch, { authFetchGet } from 'service/recruiter/authfetch';

const createJob = (data) => {

    return authFetch("/api/jobs",'Post', data)
}

export const getJobData = (pageId) => {

    return authFetchGet(`/api/jobs?myjobs=${pageId}`, 'GET');
}


export const userGet = (dataUser) => {

    return authFetch("/api/user",'Put', dataUser)
}




export default createJob;