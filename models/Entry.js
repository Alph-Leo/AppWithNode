import { Schema, model } from "mongoose";

const EntrySchema = new Schema({
    id: {
        type: String
    },
    
    title: {
        type: String, 
        require: true
    },

    content: {
        type: String,
        require: true
    },

    createdAt: {
        type: Date,
        require: true,
        default: Date.now
    }
    
}, {
    collection: 'Entry',
    timestamps: true
});

export default model('Entry', EntrySchema);