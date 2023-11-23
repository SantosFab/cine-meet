import unidecode from 'unidecode';

const movieUrl = (str) => {
  const normalizedStr = unidecode(str || '').toLowerCase();
  console.log(normalizedStr)
  return `/Detail/${normalizedStr.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}`;
};

export default movieUrl;
