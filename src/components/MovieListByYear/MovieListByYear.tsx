import React, { useCallback, useEffect, useRef, useState } from "react";
import "./movielistByYear.css";
import MovieService from "../../services/movie-service";
import MovieList from "../MovieList/MovieList";
import InfiniteScroll from "../InfiniteScroll/InfiniteScroll";
import Loader from "../Loader/Loader";

interface MovieListByYearProps {
  selectedGenres?: number[];
}

function MovieListByYear(props: MovieListByYearProps) {
  const { selectedGenres } = props;
  const movieService = new MovieService();
  const [movies, setMovies] = useState<MovieByYear[]>(DEFAULT_MOVIES);
  const [startYear, setStartMovieYear] = useState<number>(DEFAULT_YEAR);
  const [endYear, setEndMovieYear] = useState<number>(DEFAULT_YEAR);
  const [isStartLoading, setIsStartLoading] = useState<boolean>(true);
  const [isEndLoading, setIsEndLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const scrollableContainerRef = useRef<HTMLDivElement>(null); 
  const [isInitialDataLoaded, setInitialDataLoaded] = useState<boolean>(false);

  const getMovies = (year: number, isStart?: boolean) => {
    isStart ? setIsStartLoading(true) : setIsEndLoading(true);
    setError(null);

    const todaysYear = new Date().getFullYear();
    if(year > todaysYear) {
      setError("Fin. Upcoming movies to be added soon.");
      isStart ? setIsStartLoading(false) : setIsEndLoading(false);
      return null;
    }

    const genreIds = selectedGenres;

    try {
      movieService
      .getMovies(year, genreIds)
      .then((response: FetchResult) => {
        const movieList = response.results;
        setMoviesByYear(movieList, year,isStart);
        isStart ? setIsStartLoading(false) : setIsEndLoading(false);
        setInitialDataLoaded(true);
      }); 
    } catch (error: any) {
      setError(error.message);
    }
  };

  const setMoviesByYear = (
    movieList: MovieItem[],
    year: number,
    isStart = false
  ) => {
    if (!movieList.length) {
      console.error("No movies");
      return;
    }
    const moviesObj: MovieByYear = {
      year: year,
      movies: movieList,
    };

    if (isStart) {
      setMovies((movies) => [moviesObj, ...movies]);
    } else {
      setMovies((movies) => [...movies, moviesObj]);
    }
  };

  const getSetMoviesByYear = useCallback((isStart: boolean) => {
    console.log(selectedGenres);
    if (isStart) {
      setStartMovieYear((oldYear: number) => {
        const yearToFetch = oldYear - 1;
        getMovies(yearToFetch, isStart);
        return yearToFetch;
      });
    } else {
      setEndMovieYear((oldYear: number) => {
        const yearToFetch = oldYear + 1;
        getMovies(yearToFetch,isStart);
        return yearToFetch;
      });
    }
  },[startYear, endYear]);

  useEffect(() => {
    console.log("Selected Genre Ids " + selectedGenres);
  }, [selectedGenres]);

  useEffect(() => {
    getMovies(DEFAULT_YEAR, true);
  }, []);

  return (
    <div className="movie-list-container" ref={scrollableContainerRef}>
      <Loader isLoading={isStartLoading}></Loader>
      <InfiniteScroll
        loadData={(isStart) => getSetMoviesByYear(isStart)}
        scrollableDivRef={scrollableContainerRef}
        isInitialDataLoaded={isInitialDataLoaded}
      >
        {movies?.map(
          (oMovieByYear: MovieByYear) => {
            return (
              <MovieList
                key={"year" + oMovieByYear.year}
                year={oMovieByYear.year}
                movies={oMovieByYear.movies}
              ></MovieList>
            );
          }
        )}
      </InfiniteScroll>
      {error && <p>{error}</p>}
      <Loader isLoading={isEndLoading}></Loader>
    </div>
  );
}

export default MovieListByYear;

const DEFAULT_MOVIES: MovieByYear[] = [];

const DEFAULT_YEAR = 2012;
