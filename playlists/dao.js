import model from "./model.js";

export const createPlaylist = (name, userId) =>
  model.create({name: name, user: userId});

export const findPlaylistsByUser = (userId) =>
  model.find({user: userId});