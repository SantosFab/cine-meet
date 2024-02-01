export interface FetchState {
  error: string | undefined;
}

export interface ResultItem {
  id: number;
  title: string;
  overview: string;
  poster_path: string | null;
}

export interface FetchData {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}
