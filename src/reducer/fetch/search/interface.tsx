import { PageData } from "../commonTypes.tsx/apiData";

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
