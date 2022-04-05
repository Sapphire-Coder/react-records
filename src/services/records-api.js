import axios from 'axios'
const URL = 'http://localhost:3001/records/'

export const getRecords = () => {
    return axios.get(URL)
}

export const getRecord = id => {
    return axios.get(`${URL}${id}`)
}

export const deleteRecord = id => {
    return axios.delete(`${URL}${id}`)
}

export const createRecord = createdRecord => {
    return axios.post(URL, createdRecord)
}

export const updateRecord = (id, updatedRecord) => {
    return axios.put(`${URL}${id}`, updatedRecord)
}