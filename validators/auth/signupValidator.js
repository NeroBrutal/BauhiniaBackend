import Joi from "joi";
import { User } from "../../models/user.model.js";
import { ENGLISH } from "../../enums/requestLanguage.enum.js";
import { messages } from "../../helpers/errorMessage.helper.js";

module.exports = async function (data, lang = ENGLISH) {
  let result = {};

  const schema = joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required().lowercase().required(),
    password: Joi.string().min(5).max(255).required(),
    method: Joi.string().valid("mobile", "web").required(),
    is_mobile: Joi.boolean().required(),
  });
  result = schema.validate(data);
  if (result.error) return result;
  const found = await User.findOne({ email: data.email });
  if (found) {
    result = {
      error: {
        details: [{ message: messages[lang].emailExist }],
      },
    };

    result.user = user;

    return result;
  }

  result.user = user;
  return result;
};
