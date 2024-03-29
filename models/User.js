import mongoose, { Schema, Types, model } from "mongoose";

const UserSchema = new Schema({
    id: {
        type: Types.ObjectId
    },
    
    username: {
        type: String,
        require: true,
        unique: true
    },

    password: {
        type: String,
        require: true,
    },

    entries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Entry'
    }]
}, {
    collection: 'Users',
    timestamps: true
});

export default model('Users', UserSchema);