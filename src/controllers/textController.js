import { create, getOne, getAll, update } from "../repositories/textRepository";
import { success, created } from "../utilities/helpers/response";
import { tokenTransformer } from "../utilities/helpers/jwt";

export const add = async (req, res, next) => {
  const { body, user } = req;
  const [note, error] = await create(body, user._id);
  if (error) return next(error);
  return created(res,note);
};

export const one = async (req, res, next) => {
	const { params, user } = req;
  const [notes, error] = await getOne(params.id, user._id);
  if (error) return next(error);
  return success(res, notes);
};

export const all = async (req, res, next) => {
	const { user } = req;
  const [notes, error] = await getAll(user._id);
  if (error) return next(error);
  return success(res, notes);
};

export const edit = async (req, res, next) => {
	 const { params, user, body } = req;
  const [notes, error] = await update(res, body, params.id, user._id);
  if (error) return next(error);
  return success(res, notes);
};
