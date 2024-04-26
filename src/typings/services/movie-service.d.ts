interface IMovieService {
  getMovies(
    release_year: number,
    selected_genre_ids?: number[],
    sorty_by: string,
    page: number,
    vote_count: number,
  ): Promise<FetchResult>;
}
