import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addUpcomingMovies } from '../utils/moviesSlice';

const useUpcomingMovies = () => {
 // fetch data from TMDB wesite and update our moviesSlice
 const dispatch = useDispatch();
 
 const getUpcomingMovies = async() => {
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

   const json = await data.json();
   dispatch(addUpcomingMovies(json.results));
 }

 useEffect(() => {
   getUpcomingMovies();
 },[])

}

export default useUpcomingMovies;