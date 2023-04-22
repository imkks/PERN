
import CommentModel from "./comment.js"
import dbconn from "./connection.js"
import PostModel from "./post.js"
import UserModel from "./user.js"

PostModel.belongsTo(UserModel)
PostModel.hasMany(CommentModel)
UserModel.hasMany(PostModel)
UserModel.hasMany(CommentModel)

export {PostModel,UserModel,CommentModel}
