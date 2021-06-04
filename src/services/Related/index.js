const relateApi = "https://60b6e02417d1dc0017b88701.mockapi.io/api/v1/products";
const getRelated = async () => {
  const data = await fetch(apiUrl);
  const related = await data.json();
  return related;
};

const getRelatedAnotherFunction = async () => {
  const data = await fetch(apiUrl);
  const related = await data.json();
  return related;
};

export { getRelated, getRelatedAnotherFunction };
