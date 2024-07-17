import React from 'react'
import { useSelector } from 'react-redux'
import VedioBackground from './VedioBackground';
import VedioHeading from './VedioHeading';

const MainContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies);

    if (!movies) return;

    const mainMovie = movies[0];

    const {original_title, overview, id} = mainMovie;

  return (
      <div>
          <VedioHeading title={original_title} overview={ overview} />
          <VedioBackground movieId={id}/>
    </div>
  )
}

export default MainContainer