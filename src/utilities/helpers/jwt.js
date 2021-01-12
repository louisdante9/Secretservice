import jwt from "jsonwebtoken";
import util from "util";
/**
 * Encode user information and return token
 *
 * @param {{ [key: string]: any }} userDetails
 * @returns
 */
export const encode = async (payload) => {
  try {
    const key = process.env.APP_SECRET;
    const sign = util.promisify(jwt.sign);
    const token = await sign(payload, key);

    return [token, null];
  } catch (error) {
    return [null, error];
  }
};

/**
 * Decode jwt token and return contained user details
 *
 * @param {string} token
 * @returns
 */
export const decode = async (token) => {
  try {
    const key = process.env.APP_SECRET;
    const verify = util.promisify(jwt.verify);
    const user = await verify(token, key);

    return [user, null];
  } catch (error) {
    return [null, error];
  }
};

export const tokenTransformer = async (payload, action) => {
  try {
    const key = process.env.APP_SECRET;
    const fn = util.promisify(jwt[`${action}`]);
    const token = await fn(payload, key);
    return [token, null];
  } catch (error) {
    return [null, error];
  }
};