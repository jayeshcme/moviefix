class GenreService implements IGenreService {
    private readonly domain: string;
  
    constructor(){
      this.domain = "https://api.themoviedb.org/3/genre/movie/list?api_key=2dca580c2a14b55200e784d157207b4d";
    }
  
    async getGenres(): Promise<FetchResult> {
      const url = new URL(this.domain);  
      
      const response = fetch(url);
  
      const result = await response;
  
      return result.json();
      
    }
  }
  
  export default GenreService;