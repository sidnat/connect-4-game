
import axios from 'axios';

export const login = async (username, password) => {
	const response = await axios.post('players', {
		username,
		password
	});

	const token = response.data.token;
	if (token) {
		localStorage.setItem('user', JSON.stringify(response.data));
	}

	return response.data;
};

export const isAuthenticated = () => {
	const user = localStorage.getItem('user');
	if (!user) {
		return {}
	}
	return JSON.parse(user);
};