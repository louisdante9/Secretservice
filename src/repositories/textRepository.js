import Note from "../models/note";
import { notFound } from "../utilities/helpers/response";

export const create = async (noteDetails, userId) => {
  try {
    const instance = new Note({...noteDetails, userId});
    const note = await instance.save();
    return [note, null];
  } catch (error) {
    return [null, error];
  }
};

export const getOne = async (id, userId) => {
  try {
    const note = await Note.findOne({ _id: id,  userId });
    return [note, null]
  } catch (error) {
    return [null, error];
  }
};

export const getAll = async (userId) => {
  try {
    const notes = await Note.find({ userId });
    return [notes, null];
  } catch (error) {
    return [null, error];
  }
};

export const update = async (res, payload, id, userId) => {
    try {
        const note = await Note.findOne({ _id: id, userId });
        console.log(note)
        if(!note) return notFound(res, 'note note found');
        const noteObj = {$set: {...payload}};
        const updatedNote = await Note.findOneAndUpdate(
          { _id: id }, noteObj, { new: true }
        );
    return [updatedNote, null];
  } catch (error) {
    return [null, error];
  }
};

