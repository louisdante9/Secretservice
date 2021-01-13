import { tokenTransformer } from "../helpers/jwt";
import { unauthorized } from "../helpers/response";
import User from "../../models/user";

/**
 * Protects routes that requires authentitcation
 *
 * @param {Request} req
 * @param {Response} res
 * @param {() => {}} next
 *
 * @returns
 */
export const auth = async (req, res, next) => {
  const token = req.headers['authorization'];
//   return console.log(token);

  if (!token) return next(unauthorized(res, "Unauthorized Access"));

  const [decoded, error] = await tokenTransformer(token, 'verify');
  if (error) return next(error);
  const user = await verifyUser(decoded.user._id);
//   return console.log(decoded, error, "user");
  if (!user) return next(unauthorized(res, "Unauthorized Access"));

  req["user"] = user;
  return next();
};

/**
 * Verify user for provided token
 *
 * @param {number} userId
 *
 * @returns {User}
 */
export const verifyUser = async (userId) => {
  return await User.findById(userId);
};
