const mongoose = require('../config/database.config');
const Joi = require('joi');

const TutorialsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true,
        },
        description: {
            type: String,
            require: true,
        },
        active: {
            type: Boolean,
            required: true,
            default: true,
        }
    },
    {
        timestamps: {
            createdAt: 'createdAt',
            updatedAt: 'updatedAt',
        },
    }
);

exports.TutorialModel = mongoose.model('Tutorial', TutorialsSchema);

const Validate = (tutorial) => {
    const schema = {
        title: Joi.string().required(),
        description: Joi.string().required(),
    };

    return Joi.validate(tutorial, schema);
};
exports.Validate = Validate;
