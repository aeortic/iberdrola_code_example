import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {loadTracks} from '../../actions/appActions';

import TrackListContent from './TrackListContent';

import './TrackListPage.css';

// temporary just for debugging the UI
const data = [
  {
    trackName: "Merrily we roll along",
    artist: "Porky Pig",
    price: {
      amount: 300,
      currency: "USD",
    },
    artworkUrl: "https://media.giphy.com/media/ERHSfeusmwLVm/giphy.gif",
  },
  {
    trackName: "Who moved my cheese?",
    artist: "Mr. Triangle",
    price: {
      amount: 2,
      currency: "USD"
    },
    artworkUrl: "https://media.giphy.com/media/7ojeb3qz5r9jG/giphy.gif" 
  }
] 

export default function TrackListPage() {
  // const tracks = useSelector(state => state.app.tracks);
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTracks())
  }, [dispatch])

  return (
    <div className="trackListPage">
      <h2>Dog, you made it to the track list</h2>
      <ul>
        <TrackListContent data={data}/>
      </ul>
    </div>
  )
}