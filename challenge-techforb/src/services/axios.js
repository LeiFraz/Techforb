import axios from 'axios'
import apiClient from './apiClient'

const servicesAxios = {

	login: async form => {
		try {
			const response = await apiClient.post(`/api/user/login`, form)
			return response.data
		} catch (error) {
			console.log(error,error.response.data.message)
		}
	},
	status: async() => {
		try {
			const response = await apiClient.get(`/api/plants/status`)
			return response.data
		} catch (error) {
			console.log(error,error.response.data.message)
		}
	},
	plants: async() => {
		try {
			const response = await apiClient.get(`/api/plants`)
			return response.data
		} catch (error) {
			console.log(error, error.response.data.message)
		}
	},
	createPlant: async form => {
		try {
			const response = await apiClient.post(`/api/plants/create`, form)
			return response.data
		} catch (error) {
			console.log(error, error.response.data.message)
		}
	},
	traerPaises: async() => {
		try {
			const response = await apiClient.get(`/api/paises`)
			return response.data
		} catch (error) {
			console.log(error, error.response.data.message)
		}
	},
	conditions: async() => {
		try {
			const response = await apiClient.get(`/api/conditions`)
			return response.data
		} catch (error) {
			console.log(error, error.response.data.message)
		}
	},


	// sendContactForm: async formData => {
	// 	try {
	// 		const response = await apiClient.post(`/message`, formData)
	// 		return response.data
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// },

	// sendMicroForm: async form => {
	// 	try {
	// 		const response = await apiClient.post('/microbusiness', form, {
	// 			headers: {
	// 				'Content-Type': 'multipart/form-data',
	// 			},
	// 		})
	// 		return response.data
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// },
}

export default servicesAxios