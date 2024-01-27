export interface PageData {
  page: number;
  results: Array<{
    id: number;
    title: string;
    media_type: string;
    name: string;
    poster_path: string;
    overview: string;
  }>;
  total_pages: number;
  total_results: number;
}

export interface DataParams {
  isSeries?: boolean;
  page?: string;
  genre?: string;
}

export interface FetchDataState {
  data: PageData | null;
  error: string | undefined;
  urlBaseImg: string;
}
