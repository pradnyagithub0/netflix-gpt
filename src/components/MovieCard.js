import React from 'react'
import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({posterPath}) => {
  return (
      <div className='w-44 p-2'>
          <img alt='movie card' src={ IMG_CDN_URL + posterPath} />
      </div>
  )
}

export default MovieCard