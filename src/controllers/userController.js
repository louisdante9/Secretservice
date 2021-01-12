import { signup, signin } from "../repositories/userRepository";
import { success, created } from "../utilities/helpers/response";
import { tokenTransformer } from "../utilities/helpers/jwt";

export const register = async (req, res, next) => {
  const [user, error] = await signup(res, req.body);
  if (error) return next(error);
  const [token, err] = await tokenTransformer(
    { id: user._id, email: user.email },
    "sign"
  );
  if (err) return next(err);

  return created(res, { token });
};



export const login = async (req, res, next) => {
  const [user, error] = await signin(res, req.body);
  if (error) return next(error);
  const [token, err] = await tokenTransformer(
    { id: user._id, email: user.email },
    "sign"
  );
  if (err) return next(err);

  return success(res, { token });
};

