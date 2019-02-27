const chunk = (arr, len) => {

  const chunks = [];
  let i = 0;
  const n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, i += len));
  }

  return chunks;
}

exports.chunk = chunk;

const API_URL = process.env.REACT_APP_API_URL ? process.env.REACT_APP_API_URL : 'https://nba-proxy-api.herokuapp.com'
exports.API_URL = API_URL;
