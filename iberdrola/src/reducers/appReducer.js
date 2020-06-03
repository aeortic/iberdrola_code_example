import {
  LOAD_DATASET_REQUEST,
  LOAD_DATASET_SUCCESS,
} from '../constants/appActionTypes'

const initialState = {}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATASET_REQUEST:
      return {
        ...state,
        isLoaded: false,
      }
    case LOAD_DATASET_SUCCESS:
      return {
        ...state,
        tracks: action.payload,
        isLoaded: true,
      }
    default: 
      return state
  }
}

export default appReducer;