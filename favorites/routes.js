import * as dao from "./dao.js";

function FavoritesRoutes(app) {

  const createUserFavoritesVid = async (req, res) => {
    const userId = req.params.userId;
    const videoId = req.params.videoId;
    const videoTitle = req.params.videoTitle;
    const favorites = await dao.createUserFavoritesVid(userId, videoId, videoTitle);
    res.json(favorites);
  };


  const deleteUserFavoritesVid = async (req, res) => {
    const userId = req.params.userId;
    const videoId = req.params.videoId;
    const favorites = await dao.deleteUserFavoritesVid(userId, videoId);
    res.json(favorites);
  };


  const findUsersThatFavoritedVid = async (req, res) => {
    const videoId = req.params.videoId;
    const favorites = await dao.findUsersThatFavoritedVid(videoId);
    res.json(favorites);
  };


  const findVideosThatUserFavorited = async (req, res) => {
    const userId = req.params.userId;
    const favorites = await dao.findVideosThatUserFavorited(userId);
    res.json(favorites);
  };

  const findIfUserFavorited = async (req, res) => {
    const userId = req.params.userId;
    const videoId = req.params.videoId;
    const favorites = await dao.findIfUserFavorited(userId, videoId);
    res.json(favorites);
  }


  app.post("/api/users/:userId/favorites/:videoId/:videoTitle", createUserFavoritesVid);
  app.delete("/api/users/:userId/favorites/:videoId", deleteUserFavoritesVid);
  app.get("/api/favorites/:videoId/users", findUsersThatFavoritedVid);
  app.get("/api/users/:userId/favorites", findVideosThatUserFavorited);
  app.get("/api/users/:userId/favorites/:videoId", findIfUserFavorited);
}

export default FavoritesRoutes;