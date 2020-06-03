import React from 'react'

import {useHistory} from 'react-router-dom'

import StylishButton from '../buttons/StylishButton';
import Currency from '../text/Currency';

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
  const history = useHistory();

  const cleanString = (str) => {
    return str
      .split(' ')
      .map((item) => item.replace(',','').replace('?',''))
      .join('_')
  }

  const onDetailsButtonClick = (({trackName, artist}) => {
  
    const label = `${cleanString(trackName)}-${cleanString(artist)}`
    history.push(`track/${label}`)
  })

  return (
    <div className="trackListPage">
      <h2>Dog, you made it to the track list</h2>
      <ul>
      {
        data.map(({trackName, artist, price, artworkUrl}) => (
          <li key={trackName}>
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
            
          </li>
        ))
      }
      </ul>
    </div>
  )
}