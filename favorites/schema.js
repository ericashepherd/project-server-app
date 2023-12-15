import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
    videoId: String,
    videoTitle: String,
  },
  { collection: "favorites" }
);

export default schema;