// appfront/src/api/api.js
import axiosInstance from './index'

const axios = axiosInstance

// 测试数据
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

// 违规信息
export const getIllegalData = (plate, upload_time, illegal) => {return axios(
    {
        methods: 'get',
	    url: 'http://localhost:8000/api/IllegalData/',
	    params: {
            plate: plate,
            upload_time: upload_time,
            illegal: illegal
	    }
    }
)}

// 路口车辆数量
export const getTrafficFlow = (car_number) => {return axios(
    {
        methods: 'get',
	    url: 'http://localhost:8000/api/TrafficFlow/',
	    params: {
            car_number: car_number
	    }
    }
)}