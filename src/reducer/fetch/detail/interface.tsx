import { FetchState, ResultItem } from "../commonTypes/interface";

export interface Descriptor {
  id: number;
  name: string;
}

export interface DetailData extends ResultItem {
  tagline?: string;
  original_title: string;
  original_language: string;
  genres?: Descriptor[];
  production_companies?: Descriptor[];
  production_countries?: Descriptor[];
  release_date?: string;
  popularity: string;
}

export interface DetailState extends FetchState {
  data: DetailData | null;
}

export interface DetailParams {
  id: string | undefined;
}
