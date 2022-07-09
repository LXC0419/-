import {
  requestA
} from './request'

export function getHomeSwiper() {
  return requestA({
    url: '/home/multidata'
  })
}