import unidecode from "unidecode";

const movieDetailPath = (type, str, id) => {
  const normalizedStr = unidecode(str || "").toLowerCase();
  return `/Detail/${type}/${normalizedStr.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}/${id}`;
};

const movieSearchPath = (str) => {
  const normalizedStr = unidecode(str || "").toLowerCase();
  return `/Search/${normalizedStr.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")}`;
};

export { movieSearchPath, movieDetailPath };
export default movieDetailPath;
