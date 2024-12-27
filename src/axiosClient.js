import axios from "axios";


export const axiosClient = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
   
      
      headers:{
          'Content-Type':'application/json'
      }

  }); 
