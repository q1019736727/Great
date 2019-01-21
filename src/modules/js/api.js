
const api = {
    hotLists:'/index/hotLists',
}

// const host = 'http://rap2api.taobao.org/app/mock/7058'
const host = 'https://easy-mock.com/mock/5b0f9157b6b9de5a525896c6/youzan'
for (let key in api){
  if (api.hasOwnProperty(key)){
    api[key] = host + api[key]
  }
}
export default api
