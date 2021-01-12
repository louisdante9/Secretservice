import {Schema, model} from 'mongoose';
import timestampPlugin from './plugins/timestamp'

let textSchema = new Schema({
    title: { type: String, required: true },
    text: { type: String, required: true },
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
    textSchema.plugin(timestampPlugin);

const Text = model("Text", textSchema);
export default Text;