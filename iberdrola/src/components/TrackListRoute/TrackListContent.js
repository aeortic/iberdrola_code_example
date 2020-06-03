import React from 'react'
import StylishButton from '../buttons/StylishButton';
import Currency from '../text/Currency';
import {useHistory} from 'react-router-dom'

export default function TrackListContent({data}) {
  const cleanString = (str) => {
    return str
      .split(' ')
      .map((item) => item.replace(',','').replace('?',''))
      .join('_')
  }

  const history = useHistory();

  const onDetailsButtonClick = (({trackName, artist}) => {
    const label = `${cleanString(trackName)}-${cleanString(artist)}`
    history.push(`track/${label}`)
  })

  return (
    <>
      {
        data.map(({trackName, artist, price, artworkUrl}) => (
          <div key={trackName}>
            <div className="trackListPage-track">
              <img alt='' src={artworkUrl} className="trackListPage-thumb"/>
              <div className="trackListPage-trackInfo">
                <div className="trackListPage-noOverflow">Title: {trackName}</div>
                <div className="trackListPage-noOverflow">Artist: {artist}</div>
                <Currency>{price}</Currency>
                <StylishButton 
                  className="trackListPage-button"
                  onClick={() => onDetailsButtonClick({
                    trackName,
                    artist,
                  })}
                >
                  View details
                </StylishButton>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}