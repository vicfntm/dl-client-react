export function fetchUser() {
	return {
		type:'FETCH_USER_FULFILLED',
		payload: {
			userName: '',
			email: ''
		}
	}
}

export function setUserName(userName) {
	return {
		type: 'SET_USERNAME',
		payload: userName
	}
}

export function setE(email) {
	return {
		type: 'SET_EMAIL',
		payload: email
	}
}