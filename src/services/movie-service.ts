class MovieService implements IMovieService {
  private readonly domain: string;

  constructor(){
    this.domain = "https://api.themoviedb.org/3/discover/movie?api_key=2dca580c2a14b55200e784d157207b4d";
  }

  async getMovies(
    release_year: number,
    selected_genre_ids?: number[],
    sorty_by = "popularity.desc",
    page = 1,
    vote_count = 100,
  ): Promise<FetchResult> {
    const url = new URL(this.domain);  

    if(release_year) {
      url.searchParams.set("primary_release_year", release_year.toString());
    }

    if(selected_genre_ids && selected_genre_ids.length > 0) {
      url.searchParams.set("with_genres", selected_genre_ids.join(","));
    }

    if(sorty_by) {
      url.searchParams.set("sort_by", sorty_by);
    }

    if(page) {
      url.searchParams.set("page", page.toString());
    }

    if(vote_count) {
      url.searchParams.set("vote_count.gte", vote_count.toString());
    }
    
    const response = fetch(url);

    const result = await response;

    return result.json();
    
  }
}

export default MovieService;