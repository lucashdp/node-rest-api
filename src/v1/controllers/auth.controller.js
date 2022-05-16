const jwt = require("jsonwebtoken");

exports.auth = (req, res) => {
  const token = jwt.sign(
    { id: "TESTE DE LUCAS E DIEGO" },
    process.env.AUTH_SECRET
  );
  return res.status(201).send(token);
};
