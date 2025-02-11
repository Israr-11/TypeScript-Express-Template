import mongoose, { Schema, Document } from 'mongoose';
import { First } from '../interfaces/index';

export interface FirstDocument extends First, Document { }

const FirstSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        unique: true
    },
}, {
    timestamps: true
});

export const FirstModel = mongoose.model<FirstDocument>('<yourcollectionname>', FirstSchema);
