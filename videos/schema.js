import mongoose from "mongoose";
const schema = new mongoose.Schema(
  {
    videoId: { type: String, required: true },
    playlist: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "playlists",
      required: true
    }
  },
  { collection: "videos" }
);

export default schema;