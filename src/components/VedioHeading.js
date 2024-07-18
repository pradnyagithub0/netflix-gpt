import React from 'react'

const VedioHeading = ({title, overview}) => {
  return (
      <div className='pt-[18%] px-20 absolute text-white bg-gradient-to-r from-black w-screen aspect-video'>
          <h1 className='text-6xl font-bold'>{title}</h1>
          <p className='py-6 text-lg w-2/4'>{overview}</p>
          <div>
              <button className='bg-white text-black px-7 py-2 rounded-lg text-lg mr-3 hover:bg-opacity-80'><i className='bi bi-caret-right-fill text-black'></i> Play </button>
              <button className='bg-gray-500 text-white px-7 py-2 bg-opacity-50 rounded-lg text-lg mr-3 hover:bg-opacity-80'><i class="bi bi-info-circle"></i> More Info</button>
          </div>
    </div>
  )
}

export default VedioHeading