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

// 路口饱和度
export const getTrafficFlow = (car_number) => {return axios(
    {
        methods: 'get',
	    url: 'http://localhost:8000/api/TrafficFlow/',
	    params: {
            car_number: car_number
	    }
    }
)}

// 车辆违规统计
export const getIllegalStatistics = () => {return axios(
    {
        methods: 'get',
	    url: 'http://localhost:8000/api/IllegalStatistics/',
    }
)}

// 限速提交
export const postSpeedLimit = (speed) => {return axios.post(`http://localhost:8000/api/SpeedLimit/`, {'speed': speed})}

// 视频获取
export const getVideo = (video_path) => {return axios(
    {
        methods: 'get',
	    url: 'http://localhost:8000/api/Video/',
	    params: {
            video_path: video_path
	    }
    }
)}
export const postVideo = (video_path, speed) => {return axios.post(`http://localhost:8000/api/Video/`, {'video_path': video_path,'speed': speed})}
    
// export const postVideo = (video_path, speed) => {return axios(
//     {
//         methods: 'post',
// 	    url: 'http://localhost:8000/api/Video/',
// 	    params: {
//             video_path: video_path,
//             speed: speed
// 	    }
//     }
// )}
