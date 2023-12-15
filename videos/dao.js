import model from "./model.js";

export const createPlaylistVideo = (playlist, videoId) => model.create(
  {videoId, playlist});

export const findVideosInPlaylist = (playlist) => model.find({playlist})
