import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import background from "../assets/images/background.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={background} alt="background_img" />
      </div>
          <GptSearchBar />
          <GptMovieSuggestions />
      </div>
  )
}

export default GptSearch