import axios, { Axios } from 'axios'




const API_URL  = "/api/user"



const register =  async(userData) => { 

    let response = await axios.post( API_URL + '/register' , userData)
    if(response.data){
        localStorage.setItem('user' , JSON.stringify(response.data))
    }
    return response.data
}




const login = async(userData) => { 
    let response = await axios.post(API_URL + '/login' , userData)
    if(response.data){
        localStorage.setItem('user' , JSON.stringify(response.data)) 

    }

    return response.data 
}


const logout = () => { 
    localStorage.removeItem("user")
}

const authService  = { 
    register, 
    login, 
    logout
} 
export default authService