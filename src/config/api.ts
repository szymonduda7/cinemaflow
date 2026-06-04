import axios from "axios";

export const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "https://api.themoviedb.org/3";
export const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export async function sendApiRequest<SearchResponse>(
  url: string,
  params?: Record<string, any>,
): Promise<SearchResponse> {
  const response = await axios.get(`${API_BASE_URL}${url}`, {
    params: {
      api_key: API_KEY,
      ...params,
    },
  });

  return response.data;
}
