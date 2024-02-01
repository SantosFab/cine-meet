import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import unidecode from "unidecode";
import { setInputValue } from "../../reducer/fetch/search/fetchSearch";

const movieSearchPath = (str: string) => {
  const normalizedStr = unidecode(str).toLowerCase();
  return `/SearchMovies/${normalizedStr
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}/1`;
};

export const isForBrowsing = ({
  event,
  search,
  navigate,
  dispatch,
}: {
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  search: string;
  navigate: ReturnType<typeof useNavigate>;
  dispatch: ReturnType<typeof useDispatch>;
}) => {
  event.preventDefault();
  if (search === "") {
    return;
  } else {
    const str = movieSearchPath(search);
    dispatch(setInputValue(""));
    navigate(str);
  }
};
