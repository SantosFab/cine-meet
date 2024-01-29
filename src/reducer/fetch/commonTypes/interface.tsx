import { urlBaseImg } from "../../../utils/env/env";

interface ResultItem {
  id: number;
  title: string;
  media_type: string | undefined;
  name: string;
  poster_path: string | null;
  overview: string;
}

export interface PageData {
  page: number;
  results: ResultItem[];
  total_pages: number;
  total_results: number;
}

export interface FetchState {
  data: PageData | null;
  error: string | undefined;
  urlBaseImg: string;
}

export const initialState: FetchState = {
  data: null,
  error: undefined,
  urlBaseImg,
};
