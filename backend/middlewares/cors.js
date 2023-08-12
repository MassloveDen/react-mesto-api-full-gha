const allowedCors = [
  'https://mesto.masslove.nomoreparties.co',
  'http://mesto.masslove.nomoreparties.co',
  'https://api.mesto.masslove.nomoreparties.co/users/me',
  'http://api.mesto.masslove.nomoreparties.co/users/me',
  'https://api.mesto.masslove.nomoreparties.co/cards',
  'http://api.mesto.masslove.nomoreparties.co/cards',
  'https://api.mesto.masslove.nomoreparties.co/signup',
  'http://api.mesto.masslove.nomoreparties.co/signup',
  'http://localhost:3000',
  'http://localhost:3001',
  'http://localhost:4000',
  'https://158.160.46.173',
  'http://158.160.46.173',
];

module.exports = (req, res, next) => {
  const { origin } = req.headers;
  const { method } = req;
  const requestHeaders = req.headers['access-control-request-headers'];
  const DEFAULT_ALLOWED_METHODS = 'GET,HEAD,PUT,PATCH,POST,DELETE';

  if (allowedCors.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Credentials', true);
  }
  if (method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', DEFAULT_ALLOWED_METHODS);
    res.header('Access-Control-Allow-Headers', requestHeaders);

    return res.end();
  }

  return next();
};
