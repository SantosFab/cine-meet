import { FetchState } from "../commonTypes/interface";

export interface ResultItem {
  id: number;
  title: string;
  media_type: string | undefined;
  name: string;
  poster_path: string | null;
  overview: string;
}

export interface MediaByGenreData {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}

export interface MediaByGenreState extends FetchState {
  search: string;
  data: MediaByGenreData | null;
}

export interface MediaByGenreParams {
  isSeries?: boolean;
  page?: string;
  genre?: string;
}
