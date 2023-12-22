import axios from 'axios';

const REQUEST_BASE_API_URL = 'http://localhost:8081/api/v1/requests';

export function getAllMaintanenceRequest(){
    return axios.get(REQUEST_BASE_API_URL);
}

export function createMaintanenceRequest(request){
    return axios.post(REQUEST_BASE_API_URL,request);
}

export function getById(id){
    return axios.get(`${REQUEST_BASE_API_URL}/${id}`);
}

export function updateMaintanenceRequest(id, request){
    return axios.put(`${REQUEST_BASE_API_URL}/${id}`, request);
}

export function deleteMaintanenceRequest(id){
    return axios.delete(`${REQUEST_BASE_API_URL}/${id}`);

}