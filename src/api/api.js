// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance

export const getBooks = (name,author) => {return axios(
    {
        methods: 'get',
	    url: 'http://localhost:8000/api/data/',
	    params: {
            name: name,
            author: author
	    }
    }
)}

export const postBook = (name, author) => {return axios.post(`http://localhost:8000/api/data/`, {'name': name, 'author': author})}

export const getIllegalData = () => {return axios.get(`http://localhost:8000/api/IllegalData/`)}