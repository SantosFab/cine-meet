interface ResultItem {
  id: number;
  title: string;
  media_type: string;
  name: string;
  poster_path: string;
  overview: string;
}

export interface PageData {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}
