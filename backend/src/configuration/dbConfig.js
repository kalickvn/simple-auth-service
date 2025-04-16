
import mongoose from "mongoose";
const MongoConnect = async () => {
  mongoose.connect(process.env.MONGO_URI,{ useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on("connected", () => {
    console.log("Connected MongoDB");
  })
}
export default MongoConnect;