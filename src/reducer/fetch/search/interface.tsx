export interface SearchParams {
  query?: string;
  page?: string;
}

export interface FetchSearchState {
  search: string;
  data: string | null;
  error: string | undefined;
  urlBaseImg: string | undefined;
}
