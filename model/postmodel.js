const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title : {
        type:String,
        required: true
    },
    body : {
        type:String,
        required: true
    },
    created_by : {
        type:String,
        required : true
    },
    isActive : {
        type:Boolean,
        required: true
    },
    geolocation:{
        type
    }
});

const Post = mongoose.model("Post",postSchema);

module.exports = Post;
