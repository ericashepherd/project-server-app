import * as dao from "./dao.js";

function PlaylistsRoutes(app) {
  const createPlaylist = async (req, res) => {
    const name = req.params.name;
    const userId = req.params.userId;
    const newPlaylist = await dao.createPlaylist(name, userId);
    res.json(newPlaylist);
  };

  const findPlaylistsByUser = async (req, res) => {
    const userId = req.params.userId;
    const playlists = await dao.findPlaylistsByUser(userId);
    res.json(playlists);
  };

  app.post("/api/playlists/:userId/:name", createPlaylist);
  app.get("/api/playlists/:userId", findPlaylistsByUser);
}

export default PlaylistsRoutes;