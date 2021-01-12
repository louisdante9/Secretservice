import {Schema, model} from 'mongoose';
import timestampPlugin from './plugins/timestamp'

let noteSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    userId: {type: Schema.Types.ObjectId, ref: 'User'}
});
    noteSchema.plugin(timestampPlugin);

const Note = model("Note", noteSchema);
export default Note;