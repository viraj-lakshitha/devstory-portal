import axios from "axios"

const BASE_URL = "http:localhost:8081/api"

/* SignUp Request */
export const signUpApi = (request) => {
    const url = BASE_URL+"/auth/signup"
    return axios.post(url, JSON.stringify(request))
}

/* Login Request */
export const loginApi = (request) => {
    const url = BASE_URL+"/auth/login"
    return axios.post(url, JSON.stringify(request))
}