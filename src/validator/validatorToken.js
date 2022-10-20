const jwt = require("jsonwebtoken")
const SECRET = process.env.SECRET

const validateToken = [
  (req, res, next) => {
    const { authorization } = req.headers
    if (authorization) {
      const token = authorization.split(" ")[1]
      try {
        jwt.verify(token, SECRET, (err, decoded) => {
          if (err) throw (err)
          //console.log(decoded)
        })
        next()
      } catch (err) {
        return res.status(500).json({
          result: false,
          err,
          in: "jwt"
        })
      }
    } else {
      res.status(500).json({
        result: false,
        error: "No envio ningun token"
      })
    }
  }
]

module.exports = validateToken
