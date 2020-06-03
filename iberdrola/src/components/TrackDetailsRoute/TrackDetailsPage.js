import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useRouteMatch} from 'react-router-dom';
import cleanTracks from '../../utilities/cleanTracks';

import './TrackDetailsPage.css'

export default function TrackDetailsPage() {
  const match = useRouteMatch('/track/:label');
  const {params} = match || {};
  const {label} = params || {};

  const payloadTracks = useSelector(state => state.tracks)

  useEffect(() => {
    let existingTrack;
    if (payloadTracks) {
      existingTrack = cleanTracks(payloadTracks.results).find(track => (track.label === label))
    }

    if (existingTrack) {
      // in this case, we don't need another network call
      // probably would be a setTrack() call to modify state
      console.log(existingTrack);
    } else {
      // we need to search for the single track based on the label
      // probably would need to unpack the label using a utility
      // and then probably dispatch(loadTrack({trackName, artist}))
    }
  }, [payloadTracks, label])

  return (
    <div className="trackDetailsPage">
      <h2>Yo, you made it to the track details. Shaweeet!</h2>
    </div>
  )
}