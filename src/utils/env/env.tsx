const urldefault: string = "default_url";
export const apiKey = process.env.REACT_APP_API_KEY;

export const apiToken = process.env.REACT_APP_API_TOKEN;

export const urlMovies: string =
  process.env.REACT_APP_API_URL_FETCH_MOVIES ?? urldefault;

export const urlSearch: string =
  process.env.REACT_APP_API_URL_FETCH_SEARCH ?? urldefault;

export const urlBaseImg = process.env.REACT_APP_API_URL_IMG_500W ?? urldefault;

export const urlDetail =
  process.env.REACT_APP_API_URL_FETCH_DETAIL ?? urldefault;
