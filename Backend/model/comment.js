import dbconn from "./connection.js";
import {DataTypes} from 'sequelize'
import UserModel from "./user.js";
import PostModel from "./post.js";

const CommentModel= dbconn.define('Comment',{
description:DataTypes.STRING,
})

export default CommentModel;
