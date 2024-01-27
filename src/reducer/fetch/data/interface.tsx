import { PageData } from "../commonTypes.tsx/apiData";

export interface DataParams {
  isSeries?: boolean;
  page?: string;
  genre?: string;
}

export interface FetchDataState {
  data: PageData | null;
  error: string | undefined;
  urlBaseImg: string;
}
