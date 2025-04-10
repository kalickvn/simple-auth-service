import { v4 as uuidV4 } from "uuid";

import mongoose from "mongoose";
let users = [];

// NOTE: userSchema - userStructure - Shape of my data that will be
// stored in my database for EVERY USER!
//
// id: uuid - always unique!
// username -> string -> must be unique!
// password -> String
// email -> String
// createdAt: new Date();
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  password:String,
  role:{type:String, enum:['admin','customer'], default: 'customer'}
});
export default mongoose.models.User || mongoose.model("User", userSchema);
// const User = {
//   create({ username: targetUserName, email, password }) {
//     const found = users.find(({ username }) => username === targetUserName);

//     // NOTE: if it is already in list of users, we should not create one and
//     // let the user known that it is already taken!
//     if (found) {
//       throw new Error("User is already in database!");
//     }

//     users.push({
//       id: uuidV4(),
//       username: targetUserName,
//       password,
//       email,
//       createdAt: new Date(),
//     });
//   },

//   findOne({ username: targetUserName }) {
//     const found = users.find(({ username }) => username === targetUserName);

//     if (found) {
//       return found;
//     }
//   },

//   // WARN: TESTING PURPOSES ONLY.
//   // This should never exists like so!
//   getUsers() {
//     return users;
//   },
// };

// export { User };
