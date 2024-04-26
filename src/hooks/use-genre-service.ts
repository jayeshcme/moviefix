import { useEffect, useState } from "react";
import GenreService from "../services/genre-service";

function useGenreService() {
  const genreService = new GenreService();
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getGenres = () => {
    setLoading(true);
    try {
      genreService
      .getGenres()
      .then((response: any) => {
        const genreList = response.genres;
        setGenres(genreList);
        setLoading(false);
      }); 
    } catch (error: any) {
      setError(error.message);
    }
  };

  useEffect(() => getGenres(),[]);

  return {
    genres: genres,
    error: error,
    loading: loading,
  }
}

export default useGenreService;