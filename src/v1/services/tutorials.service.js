const { TutorialModel, Validate } = require("../../models/tutorials.model");

exports.get = async (tutorialId) => {
  return await TutorialModel.findOne({ _id: tutorialId, active: true }).lean();
};

exports.getAll = async () => {
  return await TutorialModel.find({ active: true }).lean();
};

exports.post = async (body) => {
  const { error } = Validate(body);
  if (error) {
    throw error;
  }
  return await TutorialModel.create(body);
};

exports.put = async (body, tutorialId) => {
  const { error } = Validate(body);
  if (error) {
    throw error;
  }
  return await TutorialModel.updateOne({ _id: tutorialId, active: true }, body);
};

exports.remove = async (tutorialId) => {
  return await TutorialModel.updateOne({ _id: tutorialId }, { active: false });
};
