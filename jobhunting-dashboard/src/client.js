import fetch from 'unfetch';

const checkStatus = response => {
    if(response.ok){
        return response
    }
    //convert non-2xx HTTP response into errors
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAlljobInfo = () =>
    fetch("market/joblist")
        .then(checkStatus);