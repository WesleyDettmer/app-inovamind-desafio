export const searchService = {
  fetchAllItems
};

function fetchAllItems(searchStr) {
  const endpoints = [
    `https://swapi.co/api/people/?search=${searchStr}`,
    `https://swapi.co/api/films/?search=${searchStr}`,
    `https://swapi.co/api/starships/?search=${searchStr}`,
    `https://swapi.co/api/species/?search=${searchStr}`,
    `https://swapi.co/api/planets/?search=${searchStr}`
  ];
  return Promise.all(
    endpoints.map(url => fetch(url).then(resp => resp.json()))
  );
}
