import axios from 'axios'

//The end point for all the auth stuff
const API_URL = '/api/users/'

//Login user
const login = async (userData) => {
	const response = await axios.post(API_URL + 'login', userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}

	return response.data
}

//Register user
const register = async (userData) => {
	const response = await axios.post(API_URL, userData)

	if (response.data) {
		localStorage.setItem('user', JSON.stringify(response.data))
	}

	return response.data
}

//Logout user
const logout = () => localStorage.removeItem('user')

const authService = {
	register,
	logout,
	login
}

export default authService
