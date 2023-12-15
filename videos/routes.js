import * as dao from "./dao.js";

function VideoRoutes(app) {
  const createPlaylistVideo = async (req, res) => {
    const playlist = req.params.playlistId;
    const videoId = req.params.videoId;
    const video = await dao.createPlaylistVideo(playlist, videoId);
    res.json(video);
  };

  const findVideosInPlaylist = async (req, res) => {
    const playlist = req.params.playlistId;
    const videos = await dao.findVideosInPlaylist(playlist);
    res.json(videos)
  }

  app.post("/api/videos/:playlistId/:videoId", createPlaylistVideo);
  app.get("/api/videos/:playlistId", findVideosInPlaylist);
}

export default VideoRoutes;