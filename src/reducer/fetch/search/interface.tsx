import { FetchData, FetchState } from "../commonTypes/interface";

export interface SearchState extends FetchState {
  data: FetchData | null;
  search: string;
}

export interface SearchParams {
  query: string;
  page?: string | undefined;
}
