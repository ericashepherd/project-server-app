import model from "./model.js";

export const findAllLikes = () => model.find();


export const createUserFavoritesVid = (userId, videoId, videoTitle) =>
  model.create({ user: userId, videoId: videoId, videoTitle: videoTitle});

  
export const deleteUserFavoritesVid = (userId, videoId) =>
  model.deleteOne({ user: userId, videoId: videoId });


export const findUsersThatFavoritedVid = (videoId) =>
  model.find({ videoId: videoId }).populate("user");


export const findVideosThatUserFavorited = (userId) => model.find({ user: userId });

export const findIfUserFavorited = (userId, videoId) => 
  model.find({user: userId, videoId: videoId});