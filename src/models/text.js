import {Schema, model} from 'mongoose';
import timestampPlugin from './plugins/timestamp'

let textSchema = new Schema({
    text: { type: String, required: true },
    userId: [{type: Schema.Types.ObjectId, ref: 'User'}]
});
    textSchema.plugin(timestampPlugin);

    module.exports = model("Transaction", textSchema);