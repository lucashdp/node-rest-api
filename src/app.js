const express = require("express");
const bodyParse = require("body-parser");
const cors = require("cors");
const routes = require("./v1/routes");
const swaggerUi = require('swagger-ui-express');
const swaggerFile = require('../swagger_output.json');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParse.json());
app.use(bodyParse.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  return res.status(200).send({
    message: "API: OK",
    version: "V1",
  });
});

app.use('/doc/v1', swaggerUi.serve, swaggerUi.setup(swaggerFile));

routes(app);

app.listen(PORT, () => {
  const now = new Date();
  console.log(`Listening on port ${PORT} at ${now.toLocaleString("pt-BR")}...`);
});
