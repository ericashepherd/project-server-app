import schema from "./schema.js";
import mongoose from "mongoose";
const model = mongoose.model("videos", schema);
export default model;