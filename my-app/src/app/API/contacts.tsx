"use client";
import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:3001'
  });

const sendData = async (data:object)=>{
    try{
        const response = await api.post('/contacts', data);
        console.log(response.data)
        return response.data

    }catch(error) {
        console.log('we have an error',error)
        throw error
    }
};
export default sendData;