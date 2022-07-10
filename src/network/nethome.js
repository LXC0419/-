import {
  requestA,
  requestB
} from './request'

export function getHomeSwiper() {
  return requestA({
    url: '/home/multidata'
  })
}

export function getHomeData(type, page) {
  return requestB({
    url: '/home/data',
    params: {
      type,
      page
    }
  })
}