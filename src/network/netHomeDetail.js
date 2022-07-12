import {
  requestB
} from './request'


export function getHomeDetail(iid) {
  return requestB({
    url: 'detail',
    params: {
      iid
    }
  })
}
export class DetailData {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo.services
    this.realPrice = itemInfo.lowNowPrice
  }

}
export class DetailShop {
  constructor(shop) {
    this.shopLogo = shop.shopLogo;
    this.name = shop.name;
    this.cFans = shop.cFans;
    this.cSells = shop.cSells;
    this.score = shop.score;
    this.cGoods = shop.cGoods;
  }
}