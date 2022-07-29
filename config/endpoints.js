const isLocalhost = process.env.NODE_ENV === "development";
const prefix = isLocalhost
  ? `http://localhost:3000/testpaulo`
  : `https://testpaulo.herokuapp.com/testpaulo`;
const resources = `${prefix}/resources`;
const endpoints = {
  home: `${resources}/summary.json`,
  checkout: `${resources}/checkout.json`,
};

export default endpoints;
