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

// For Profile update start-------->

export const GetUserData = (dataUser) => {

    return authFetch("/api/user",'Put', dataUser)
}

export const PutUserData = (data) => {

    return authFetchGet("/api/user",'GET', data)
}



// Update List Data popup-------->

export const getJobUpdateData = (data) => {

    return authFetchGet("/api/jobs/"+data,'GET');
}
export const putJobUpdateData = (id,data) => {

    return authFetch(`/api/jobs/${id}`,'Put',data)
}


//Delete list Data popup --->

export const deleteJobData = (id) => {

    return authFetchGet(`/api/jobs/${id}`, 'DELETE');
}

export default createJob;