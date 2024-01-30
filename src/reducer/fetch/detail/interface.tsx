import { FetchState } from "../commonTypes/interface";

export interface DetailData {
  poster_path: string | undefined;
  title: string;
  original_title: string;
  original_language: string;
  genres: string[];
  tagline: string;
  production_companies: string[];
  production_countries: string[];
  ovierview: string;
}

export interface DetailState extends FetchState {
  data: DetailData | null;
}

type typeOfMedia = "movie" | "tv";

export interface DetailParams {
  type: typeOfMedia;
  id: number;
}
