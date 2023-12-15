import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("playlists", schema);
export default model;