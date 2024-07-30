import { FetchData, FetchState } from "../commonTypes/interface";

export interface MediaByGenreState extends FetchState {
  data: FetchData | null;
}

export interface MediaByGenreParams {
  page?: string;
  genre?: string;
}
