import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addNowPlayingMovies } from '../utils/moviesSlice';

const useNowPlayingMovies = () => {
 // fetch data from TMDB wesite and update our moviesSlice
 const dispatch = useDispatch();
 
 const getNowPlayingMovies = async() => {
   const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);

   const json = await data.json();
   dispatch(addNowPlayingMovies(json.results));
 }

 useEffect(() => {
   getNowPlayingMovies();
 },[])

}

export default useNowPlayingMovies;