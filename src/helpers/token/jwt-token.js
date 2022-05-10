const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET_KEY;

const generateJWTToken = (payload) => {
  try {
    const token = jwt.sign(
      payload,secret,
      { expiresIn: '24h' }
    );
    return token;
  } catch (error) {
    return error;
  }
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  const tokenWithoutBearer = token.substring(token.indexOf('Bearer ') + 7, token.length);
  if (!tokenWithoutBearer) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(tokenWithoutBearer, secret);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports ={
  generateJWTToken,
  verifyToken
};
