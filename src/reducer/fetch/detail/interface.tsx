import { FetchState } from "../commonTypes/interface";

export interface Descriptor {
  id: number;
  name: string;
}

export interface DetailData {
  id: number;
  name: string;
  tagline: string;
  overview: string;
  poster_path: string | undefined;
  original_name: string;
  original_language: string;
  genres: Descriptor[];
  production_companies: Descriptor[];
  production_countries: Descriptor[];
}

export interface DetailState extends FetchState {
  data: DetailData | null;
}

export type TypeOfMedia = "movie" | "tv" | undefined;

export interface DetailParams {
  type: TypeOfMedia ;
  id: string | undefined;
}
