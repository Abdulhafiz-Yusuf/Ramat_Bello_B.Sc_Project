// define types
import { LOGIN, VIEWPAGE, SIGNUP, GET_CURRENT_USER, FETCH_RESULT_DATA, ERROR, SEARCH_INMATE } from './types'


import { initialState } from './globalStore'



export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		//USER REDUCER
		case LOGIN:
			return action.payload.user
		case SIGNUP:
			return action.payload.newUser
		case GET_CURRENT_USER:
			return { ...state, user: action.payload }


		//RESULT REDUCER
		case FETCH_RESULT_DATA:
			return { ...state, result: action.payload }

		case VIEWPAGE:
			return { ...state, ViewPage: action.payload.page, inmate: action.payload.inmate }
		case ERROR:
			return { ...state, error: action.payload }
		case SEARCH_INMATE:
			return { ...state, inmate: action.payload }
		default:
			return state
	}
}
