import dbconn from "./connection.js";
import {DataTypes} from 'sequelize'
import UserModel from "./user.js";
import CommentModel from "./comment.js";

const PostModel= dbconn.define('Post',{
title:DataTypes.STRING,
content:DataTypes.TEXT(5000)
})
CommentModel.belongsTo(PostModel)
PostModel.hasMany(CommentModel)
export default PostModel;
