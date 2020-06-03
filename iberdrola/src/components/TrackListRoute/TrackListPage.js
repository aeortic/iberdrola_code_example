import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'

import {loadTracks} from '../../actions/appActions';
import cleanTracks from '../../utilities/cleanTracks';

import TrackListContent from './TrackListContent';

import './TrackListPage.css';

export default function TrackListPage() {
  const [tracks, setTracks] = useState()
  const payloadTracks = useSelector(state => {
    return state.tracks
  });
  
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadTracks())
  }, [dispatch])

  useEffect(() => {
    if (payloadTracks) {
      const cleanedTracks = cleanTracks(payloadTracks.results)
      setTracks(cleanedTracks)
    }
  }, [payloadTracks])

  return (
    <div className="trackListPage">
      <h2>Dog, you made it to the track list</h2>
      <ul>
        {tracks && 
          <TrackListContent data={tracks}/>
        }
      </ul>
    </div>
  )
}