import axios from 'axios';
import {
  LOAD_DATASET_REQUEST,
  LOAD_DATASET_SUCCESS
} from '../constants/appActionTypes';

function loadTracksRequest() {
  return {
    type: LOAD_DATASET_REQUEST
  }
}

function loadTracksSuccess(tracks) {
  return {
    type: LOAD_DATASET_SUCCESS,
    payload: tracks,
  }
}

export function loadTracks() {
  return dispatch => {
    dispatch(loadTracksRequest())
    return axios('https://itunes.apple.com/search', { 
      params: {
        term: "rock",
        media: "music"
      }
    })
      .then((response) => {
        const tracks = response.data
        dispatch(loadTracksSuccess(tracks)) 
      })
  }
}