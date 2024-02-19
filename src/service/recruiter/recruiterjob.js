import authFetch, { authFetchGet } from 'service/recruiter/authfetch';

// Create & list job start------->

const createJob = (data) => {

    return authFetch("/api/jobs",'Post', data)
}

export const getJobData = (pageId) => {

    return authFetchGet(`/api/jobs?myjobs=${pageId}`, 'GET');
}

// For Profile update start-------->

export const GetUserData = (dataUser) => {

    return authFetch("/api/user",'Put', dataUser)
}

export const PutUserData = (data) => {

    return authFetchGet("/api/user",'GET', data)
}



// Update Data popup-------->

export const getJobUpdateData = (data) => {

    return authFetchGet("/api/jobs",'GET', data)
}
export const putJobUpdateData = (id) => {

    return authFetch(`/api/jobs/${id}`,'Put')
}


//Delete data  --->

export const deleteJobData = (id) => {

    return authFetchGet(`/api/jobs/${id}`, 'DELETE');
}

export default createJob;