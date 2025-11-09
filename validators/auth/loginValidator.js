import { joi } from "joi";
import { user } from "../../models/user.model.js";
import { ENGLISH } from "../../enums/requestLanguage.enum.js";
import { messages } from "../../helpers/errorMessage.helper.js";

module.exports = async function (data, lang = ENGLISH) {
  let result = {};

  const schema = joi.object({
    email: joi.string().email().required().lowercase().required(),
    password: joi.string().min(5).max(255).required(),
  });
  result = schema.validate(data);
  if (result.error) return result;
  const user = await user.findOne({ email: data.email });
  if (!user) {
    result = {
      error: {
        details: [{ message: messages[lang].noUser }],
      },
    };

    return result;
  }

  const validPassword = await user.comparePassword(data.password);
  if (!validPassword) {
    result = {
      error: {
        details: [{ message: messages[lang].invalidPassword }],
      },
    };

    return result;
  }

  result.user = user;
  return result;
};
