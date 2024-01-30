export interface FetchState {
  error: string | undefined;
  urlBaseImg: string;
}

export interface ResultItem {
  id: number;
  title: string;
  media_type: string | undefined;
  name: string;
  poster_path: string | null;
  overview: string;
}

export interface FetchData {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}
