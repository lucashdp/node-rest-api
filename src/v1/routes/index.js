const express = require("express");
const router = express.Router();
const {
  get,
  getAll,
  post,
  put,
  remove,
} = require("../controllers/tutorials.controller");
const { auth } = require("../controllers/auth.controller");

const {
  authMiddleware,
} = require("../../middlewares/authentication.middleware");

// GET /v1/public/tutorials
router.get("/v1/public/auth", async (req, res) => {
  // #swagger.tags = ['Tutorial']
  /* #swagger.responses[200] = {
          description: "Tutorial found",
          schema: { $ref: "#/definitions/Tutorial" },
      } */
  /* #swagger.responses[404] = {
          description: "Not found",
          schema: {}
      } */
  /* #swagger.responses[500] = {
          description: "Internal server error",
          schema: {}
      } */
  await auth(req, res);
});

// GET /v1/public/tutorials
router.get("/v1/public/tutorials", async (req, res) => {
  // #swagger.tags = ['Tutorial']
  /* #swagger.responses[200] = {
          description: "Tutorial found",
          schema: { $ref: "#/definitions/Tutorial" },
      } */
  /* #swagger.responses[404] = {
          description: "Not found",
          schema: {}
      } */
  /* #swagger.responses[500] = {
          description: "Internal server error",
          schema: {}
      } */
  await getAll(req, res);
});

// GET /v1/public/tutorials/:tutorialId
router.get("/v1/public/tutorials/:tutorialId", async (req, res) => {
  // #swagger.tags = ['Tutorial']
  /* #swagger.responses[200] = {
          description: "Tutorial found",
          schema: { $ref: "#/definitions/Tutorial" },
      } */
  /* #swagger.responses[500] = {
          description: "Internal server error",
          schema: {}
      } */
  await get(req, res);
});

// POST /v1/public/tutorials
router.post("/v1/public/tutorials", authMiddleware, async (req, res) => {
  // #swagger.tags = ['Tutorial']
  /* #swagger.responses[200] = {
          description: "Tutorial found",
          schema: { $ref: "#/definitions/Tutorial" },
      } */
  /* #swagger.responses[500] = {
          description: "Internal server error",
          schema: {}
      } */
  /* #swagger.parameters['body'] = {
        in: "body",
        name: "body",
        description: "Tutorial model object",
        required: true,
        schema: { 
          title: "",
          description: ""
        }
  } */
  await post(req, res);
});

// PUT /v1/public/tutorials
router.put(
  "/v1/public/tutorials/:tutorialId",
  authMiddleware,
  async (req, res) => {
    // #swagger.tags = ['Tutorial']
    /* #swagger.responses[200] = {
          description: "Tutorial found",
          schema: { $ref: "#/definitions/Tutorial" },
      } */
    /* #swagger.responses[500] = {
          description: "Internal server error",
          schema: {}
      } */
    /* #swagger.parameters['body'] = {
          in: "body",
          name: "body",
          description: "Tutorial model object",
          required: true,
          schema: { 
            title: "",
            description: ""
          }
    } */
    await put(req, res);
  }
);

// DELETE /v1/public/tutorials
router.delete(
  "/v1/public/tutorials/:tutorialId",
  authMiddleware,
  async (req, res) => {
    // #swagger.tags = ['Tutorial']
    /* #swagger.responses[200] = {
          description: "Tutorial found",
          schema: { $ref: "#/definitions/Tutorial" },
      } */
    /* #swagger.responses[500] = {
          description: "Internal server error",
          schema: {}
      } */
    await remove(req, res);
  }
);

module.exports = (app) => {
  app.use(router);
};
