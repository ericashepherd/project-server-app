import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "users", required: true }
  },
  { collection: "playlists" }
);

export default schema;