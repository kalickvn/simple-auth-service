
import mongoose from "mongoose";
const MongoConnect = async () => {
  mongoose.connect(process.env.MONGO_URI);
  mongoose.connection.on("connected", () => {
    console.log("Connected MongoDB");
  })
}
export default MongoConnect;