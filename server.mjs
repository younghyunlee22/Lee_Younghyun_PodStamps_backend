import express from "express";
import "dotenv/config";
import cors from "cors";
import SpotifyWebApi from "spotify-web-api-node";

const app = express();

const PORT = process.env.PORT || 8000;

// Configuring the server to accept and parse JSON data.
app.use(cors());
app.use(express.json());

app.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  });

  spotifyApi
    .refreshAccessToken()
    .then((data) => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.sendStatus(400);
    });
});

app.post("/signin", (req, res) => {
  const code = req.body.code;
  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  });
  console.log("line 44 code", code);

  spotifyApi
    .authorizationCodeGrant(code)
    .then((data) => {
      console.log("line 49", data.body);
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      });
      console.log("line 54");
    })
    .catch((err) => {
      console.log("line 58");
      console.log(err);
      res.sendStatus(400);
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
