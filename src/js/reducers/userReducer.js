export default function reducer(state={
	userName:"bla",
	email: 2,
}, action) {
	switch (action.type) {
		case "SET_USERNAME": {
			return {...state, userName : 'Vic'}
		}
	}
}