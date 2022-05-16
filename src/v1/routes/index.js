const express = require("express");
const router = express.Router();
const {
  get,
  getAll,
  post,
  put,
  remove,
} = require("../controllers/tutorials.controller");
const {
  auth
} = require("../controllers/auth.controller");

const { authMiddleware } = require('../../middlewares/authentication.middleware');


// GET /v1/public/tutorials
router.get("/v1/public/auth", auth);

// GET /v1/public/tutorials
router.get("/v1/public/tutorials", getAll);

// GET /v1/public/tutorials/:tutorialId
router.get("/v1/public/tutorials/:tutorialId", get);

// POST /v1/public/tutorials
router.post("/v1/public/tutorials", authMiddleware, post);

// PUT /v1/public/tutorials
router.put("/v1/public/tutorials/:tutorialId", authMiddleware, put);

// DELETE /v1/public/tutorials
router.delete("/v1/public/tutorials/:tutorialId", authMiddleware, remove);

module.exports = (app) => {
  app.use(router);
};
