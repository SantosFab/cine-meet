import { FetchData, FetchState } from "../commonTypes/interface";

export interface ScearchState extends FetchState {
  data: FetchData | null;
  scearch: string;
}

export interface SearchParams {
  query: string;
  page: number;
}
