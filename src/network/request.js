import axios from 'axios'

// 轮播图接口
export function requestA(config) {
  const axiosA = axios.create({
    baseURL: 'http://123.207.32.32:8000'
  })

  return axiosA(config)
}

export function requestB(config) {
  const axiosB = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66'
  })

  return axiosB(config)
}