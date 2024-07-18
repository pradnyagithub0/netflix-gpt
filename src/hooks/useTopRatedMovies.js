import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTIONS } from '../utils/constant';
import { addTopRatedMovies } from '../utils/moviesSlice';

const useTopRatedMovies = () => {
 // fetch data from TMDB wesite and update our moviesSlice
 const dispatch = useDispatch();
 
 const getTopRatedMovies = async() => {
   const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);

   const json = await data.json();
   dispatch(addTopRatedMovies(json.results));
 }

 useEffect(() => {
   getTopRatedMovies();
 },[])

}

export default useTopRatedMovies;