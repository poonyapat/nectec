const mongoose = require('mongoose');
const { Schema } = mongoose;

const temple3dSchema = new Schema({
    title: String,
    url: String
});

mongoose.model('temple3ds', temple3dSchema);