import Axios from '@/.nuxt/axios.js'

export const getBanners=()=>{
    return Axios({
        url:'scenics/banners',
    })
    // return 66
}