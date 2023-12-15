import session from "express-session";
import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import UserRoutes from "./users/routes.js";
import FavoritesRoutes from "./favorites/routes.js";
import VideoRoutes from "./videos/routes.js";
import PlaylistsRoutes from "./playlists/routes.js";

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);

// checks connection status (from piazza)
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

const app = express();
app.use(
  cors({
    credentials: true,
    withCredentials: true,
    origin: process.env.FRONTEND_URL,
  })
);

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}
app.use(session(sessionOptions));
app.use(express.json());

// Routes
UserRoutes(app);
FavoritesRoutes(app);
VideoRoutes(app);
PlaylistsRoutes(app);


app.listen(process.env.PORT || 4000);