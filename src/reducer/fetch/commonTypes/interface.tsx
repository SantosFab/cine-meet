export interface FetchState {
  error: string | undefined;
}

export interface ResultItem {
  id: number;
  name: string;
  title: string;
  overview: string;
  media_type: string | undefined;
  poster_path: string | null;
}

export interface FetchData {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}
