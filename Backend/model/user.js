import dbconn from "./connection.js";
import {DataTypes} from 'sequelize'
import PostModel from "./post.js";
import CommentModel from "./comment.js";

const UserModel= dbconn.define('User',{
name:DataTypes.STRING,
email:DataTypes.STRING,
password: DataTypes.STRING
})
PostModel.belongsTo(UserModel)
CommentModel.belongsTo(UserModel)

UserModel.hasMany(PostModel)
UserModel.hasMany(CommentModel)
export default UserModel;
// (async () => {
//     await UserModel.sync({ force: true });
//     // Code here
//     console.log("Table created")
//   })();
  