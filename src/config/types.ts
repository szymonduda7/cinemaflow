export interface SearchResult {
  adult: boolean;
  backdrop_path: string | null;
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | null;
  media_type: "tv" | "movie" | "person";
  original_language: string;
  genre_ids: number[];
  popularity: number;
  vote_count: number;
  vote_average: number;
  first_air_date?: string;
  softcore?: boolean;
  origin_country?: string[];
}

export interface SearchResponse {
  results: SearchResult[];
  page: number;
  total_pages: number;
  total_results: number;
}
