import jwt_decode from 'jwt-decode';

function parseJWT(token) {
  const decoded = jwt_decode(token);
  return decoded;
}

export default parseJWT;
