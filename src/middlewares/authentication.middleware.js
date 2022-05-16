const jwt = require("jsonwebtoken");

exports.authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader)
    return res.status(401).send({ message: "No token provided" });

  const parts = authHeader.split(" ");

  if (!parts.length === 2)
    return res.status(401).send({ message: "Token error" });

  if ("Bearer" !== parts[0])
    return res.status(401).send({ message: "Token malformatted" });

  const token = parts[1];

  jwt.verify(token, process.env.AUTH_SECRET, (err, decoded) => {
    if (err) return res.status(401).send({ message: "Token invalid" });
    return next();
  });
};
