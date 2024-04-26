import React from "react";
import "./movieList.css"
import FlixImage from "../FlixImage/FlixImage";

interface MovieListProps {
  movies: MovieItem[];
  year: number;
}

function MovieList(props: MovieListProps) {
  const { movies, year } = props;

  const getMoviePosterPath = (imagePath: string) => {
    if (!imagePath) {
      return "Image Path not found.";
    }

    const baseUrl = "https://image.tmdb.org/t/p/w154";
    return baseUrl + imagePath;
  };

  return (
    <div className="movie-grid-container">
      <span className="movie-year">{year}</span>
      {movies?.map((movie: MovieItem) => {
        const posterImagePath = getMoviePosterPath(
          movie.poster_path
        );
        return (
          <div className="movie-card" key={movie.id}>
            <FlixImage
              mobSrc={posterImagePath}
              deskSrc={posterImagePath}
              alt={movie.title + "Image"}
            />
            <span className="movie-title">{movie.title}</span>
          </div>
        );
      })}
    </div>
  );
}

export default MovieList;
