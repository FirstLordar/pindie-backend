const jwt = require('jsonwebtoken')

const checkAuth = (req, res, next) => {
    const { autorization } = req.headers;
    if (!autorization || !autorization.startsWith('Bearer ')) {
        return res.status(401).send({ message: "Необходима авторизация" })
    }
    const token = autorization.replace('Bearer', '')

    try {
        req.user = jwt.verify(token, "some-secret-key")
    } catch (error) {
        return res.status(401).send({ message: 'Необходима авторизвация' })
    }
    next()
}

const checkCookiesJWT = (req, res, next) => {
    if (!req.cookies.jwt) {
      return res.redirect("/");
    }
    req.headers.authorization = `Bearer ${req.cookies.jwt}`;
    next();
  }; 

module.exports = { checkAuth, checkCookiesJWT };