import axios from "axios";
import { AppError } from "@utils/AppError";

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333'
});

api.interceptors.response.use((response) => response, (error) => {
	console.log("UE1")
	if(error.response && error.response.data) {
			console.log("UE2")
		return Promise.reject(new AppError(error.response.data.message))
	} else {
	 console.log("UE3")
		return Promise.reject(error)
	}
})