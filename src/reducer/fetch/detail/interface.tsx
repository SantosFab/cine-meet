import { FetchState, ResultItem } from "../commonTypes/interface";

export interface Descriptor {
  id: number;
  name: string;
}

export interface Countries {
  iso_3166_1: string;
  name: string;
}

export interface DetailData extends ResultItem {
  tagline?: string;
  original_title: string;
  original_language: string;
  genres?: Descriptor[];
  production_companies?: Descriptor[];
  production_countries?: Countries[];
  release_date?: string;
  popularity: string;
}

export interface DetailState extends FetchState {
  data: DetailData | null;
}

export interface DetailParams {
  id: string | undefined;
}
