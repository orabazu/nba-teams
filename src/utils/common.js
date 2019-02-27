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

const TEAM_LOGO_URL = 'https://s3.amazonaws.com/nba8bit/logo/';
exports.TEAM_LOGO_URL = TEAM_LOGO_URL;
