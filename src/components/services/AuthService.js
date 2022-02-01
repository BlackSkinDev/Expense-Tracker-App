import Axios from 'axios'
import BASE_URL from '../Constant.js'
export const registerUser = async (userData)=>{
    return await Axios.post(`${BASE_URL}/register`,userData)
}