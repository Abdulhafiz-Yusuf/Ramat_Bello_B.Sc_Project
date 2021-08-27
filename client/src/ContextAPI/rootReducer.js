// define types
import { READ_ALL_INMATE, LOGIN, VIEWPAGE, SIGNUP, GET_CURRENT_USER, FETCH_RESULT_DATA, ERROR, SEARCH_INMATE } from './types'


import { initialState } from './globalStore'



export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		//USER REDUCER
		case LOGIN:
			return { ...state, user: action.payload.user }
		case SIGNUP:
			return { ...state, user: action.payload.newUser }
		case GET_CURRENT_USER:
			return { ...state, user: action.payload }

		//INMATE REDUCER
		case READ_ALL_INMATE:
			return { ...state, inmate: action.payload }
		case FETCH_RESULT_DATA:
			return { ...state, result: action.payload }
		case VIEWPAGE:
			return { ...state, ViewPage: action.payload.page, currentInmate: action.payload.inmate }
		case ERROR:
			return { ...state, error: action.payload }
		case SEARCH_INMATE:
			return { ...state, inmate: action.payload }
		default:
			return state
	}
}
