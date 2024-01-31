import { useNavigate } from "react-router-dom";
import unidecode from "unidecode";

const movieSearchPath = (str: string) => {
  const normalizedStr = unidecode(str).toLowerCase();
  return `/SearchMovies/${normalizedStr
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")}`;
};

export const isForBrowsing = ({
  event,
  search,
  navigate,
}: {
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  search: string;
  navigate: ReturnType<typeof useNavigate>;
}) => {
  event.preventDefault();
  if (search === "") {
    return;
  } else {
    const str = movieSearchPath(search);
    navigate(str);
  }
};
