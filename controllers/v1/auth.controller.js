import { validateSignup } from "../../validations/auth.validation.js";
import { validate} from "../../validators/auth/index.js";

async function signup(req, res, next) {
  const { language, body } = req;
  const { email, name, is_mobile, password } = body;

  const {error, user:found } = await validate