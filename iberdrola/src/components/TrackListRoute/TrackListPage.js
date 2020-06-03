import React from 'react'

import StylishButton from '../buttons/StylishButton';

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
  return (
    <>
      <h2>Dog, you made it to the track list</h2>
      <ul>
      {
        data.map(({trackName, artist, price, artworkUrl}) => (
          <li key={trackName}>
            <div className="trackListPage-track">
              <img src={artworkUrl} />
              <div className="trackListPage-trackInfo">
                <div>Title: {trackName}</div>
                <div>Artist: {artist}</div>
                <div>{price.amount}</div>
                <StylishButton className="trackListPage-button">View details</StylishButton>
              </div>
            </div>
            
          </li>
        ))
      }
      </ul>
    </>
  )
}