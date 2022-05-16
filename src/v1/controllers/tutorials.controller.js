const tutorialService = require("../services/tutorials.service");

exports.get = async (req, res) => {
  try {
    const tutorialResult = await tutorialService.get(req.params.tutorialId);
    if (!tutorialResult) {
      return res.status(404).send(tutorialResult);
    }
    return res.status(200).send(tutorialResult);
  } catch (error) {
    return res.status(500).send(error);
  }
};

//TODO -> tratar os erros dos endpoints abaixo
exports.getAll = async (req, res) => {
  const tutorialResult = await tutorialService.getAll();
  return res.status(200).send(tutorialResult);
};

exports.post = async (req, res) => {
  try {
    const tutorialResult = await tutorialService.post(req.body);
    return res.status(201).send(tutorialResult);
  } catch (error) {
    return res.status(500).send(error);
  }
};

exports.put = async (req, res) => {
  const tutorialResult = await tutorialService.put(
    req.body,
    req.params.tutorialId
  );
  return res.status(200).send(tutorialResult);
};

exports.remove = async (req, res) => {
  const tutorialResult = await tutorialService.remove(req.params.tutorialId);
  return res.status(200).send(tutorialResult);
};
