import { PageData } from "../commonTypes/interface";

export interface SearchParams {
  query?: string;
  page?: string;
}

export interface FetchSearchState {
  search: string;
  data: PageData | null;
  error: string | undefined;
  urlBaseImg: string | undefined;
}
