import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    name: String,
    branch: String,
    age: Number
});

export const dbUse = mongoose.model("Table", Schema);