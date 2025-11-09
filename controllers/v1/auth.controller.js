import { response } from "express";
import { validate } from "../../validators/auth/index.js";
import { responseCodes } from "../../helpers/responseCodes.json";
import Role from "../../models/role.model.js";
import {USER, ADMIN, SUPER_ADMIN} from "../../enums/userRoles.enum.js";

async function signup(req, res, next) {
  const { language, body } = req;
  const { email, name, is_mobile, password } = body;

  const { error, user: found } = await validate.signupValidator(body, language);
    if (error) {
        res.data = {exist: !! found};
        res.code  = responseCodes.badRequest;
        res.message = error.details[0].message;
        return next();
    }

    const userRole = await Role.findOneAndUpdate({ name: USER }, { $setname: { name : USER} }, { upsert: true, new: true });

    const emailValidity = true;
