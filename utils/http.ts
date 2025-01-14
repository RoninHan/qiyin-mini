import Taro from '@tarojs/taro'

 const post = (url: string, data: any) => {
    return Taro.request({
        url,
        data,
        method: 'POST',
        header: {
        'content-type': 'application/json'
        }
    })
}

 const get = (url: string, data?: any) => {
    return Taro.request({
        url,
        data,
        method: 'GET',
        header: {
        'content-type': 'application/json'
        }
    })
}

export {
    post,
    get
}