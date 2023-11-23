import unidecode from 'unidecode';

const movieUrl = (str, id) => {
  const normalizedStr = unidecode(str || '').toLowerCase();
  return `/Detail/${normalizedStr.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')}/${id}`;
};

export default movieUrl;
