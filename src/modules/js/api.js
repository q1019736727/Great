
const api = {
  hotLists:'/index/hotLists',
  banner:'/index/bannerLists',//首页轮播图
  kinds:'/category/kinds',//分类页对应cid
  items:'/category/items',//分类页品牌
  searchHotItems:'/search/hotItems',//搜索热门品牌
  goodsDetail:'/goods/details',//商品详情页
  goodsDeal:'/goods/deal',//本店成交
  cartLists:'/cart/lists',//购物车页
  mylists:'/address/mylists',//我的地址列表

  // hotLists: '/index/hotLists',
  // banner: '/index/banner',
  // topList: '/category/topList',
  // subList: '/category/subList',
  // rank: '/category/rank',
  // searchList: '/search/list',
  // details: '/goods/details',
  // deal: '/goods/deal',
  // cartAdd: '/cart/add',
  // cartRemove: '/cart/remove',
  // cartMremove: '/cart/mremove',
  // cartReduce: '/cart/reduce',
  // cartLists: '/cart/list',
  // cartUpdate: '/cart/update',
  // addressLists: '/address/list',
  // addressAdd: '/address/add',
  // addressRemove: '/address/remove',
  // addressUpdate: '/address/update',
  // addressSetDefault: '/address/setDefault'
}

// const host = 'http://rap2api.taobao.org/app/mock/7058'
const host = 'https://easy-mock.com/mock/5b0f9157b6b9de5a525896c6/youzan'
for (let key in api){
  if (api.hasOwnProperty(key)){
    api[key] = host + api[key]
  }
}
export default api
