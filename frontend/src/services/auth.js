import { BASE_URL } from "."

export const login =  (email, password) => {
    
    return axios.post(`${BASE_URL}/login`, {
      email,
      password,
    },{withCredentials:true});
    
}
export const logout = () => {
    return axios.post(`${BASE_URL}/logout`,{withCredentials:true});

  };