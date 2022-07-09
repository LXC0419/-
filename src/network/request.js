import axios from 'axios'

// 轮播图接口
export function requestA(config) {
  const axiosA = axios.create({
    baseURL: 'http://123.207.32.32:8000'
  })

  return axiosA(config)
}