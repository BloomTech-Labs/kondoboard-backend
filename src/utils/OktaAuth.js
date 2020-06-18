const OktaJwtVerifier = require('@okta/jwt-verifier');

const oktaJwtVerifier = new OktaJwtVerifier({
  issuer: `${process.env.OKTA_DOMAIN}/oauth2/default`,
});

const authenticationRequired = async (req, res, next) => {
  if (process.env.TESTING) {
    req.jwt = { claims: { sub: 'peterparker@newyork.com' } };
    return next();
  }
  const authHeader = req.headers.authorization || '';
  const match = authHeader.match(/Bearer (.+)/);
  if (!match) {
    res.status(401);
    return next('Unauthorized');
  }
  const accessToken = match[1];
  try {
    const jwt = await oktaJwtVerifier.verifyAccessToken(accessToken, process.env.AUDIENCE);
    req.jwt = jwt;
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = authenticationRequired;
