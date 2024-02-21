// import SpotifyWebApi from "spotify-web-api-node";
//
// export const signIn = async (req, res) => {
//     try {
//         const spotifyApi = new SpotifyWebApi({
//             redirectUri: process.env.REDIRECT_URI,
//             clientId: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//         })
//
//         const code = req.body.code
//
//         spotifyApi.authorizationCodeGrant(code).then((data) => {
//             res.json({
//                 accessToken: data.body.access_token,
//                 refreshToken: data.body.refresh_token,
//                 expiresIn: data.body.expires_in,
//             })
//         }).catch((err) => {
//             console.log(err)
//             res.sendStatus(400)
//         })
//     } catch (err) {
//         console.log(err)
//         res.status(500).json({success: false, error: err.message})
//     }
// }
//
// export const refresh = async (req, res) => {
//     try {
//         const refreshToken = req.body.refreshToken
//         const spotifyApi = new SpotifyWebApi({
//             redirectUri: process.env.REDIRECT_URI,
//             clientId: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//             refreshToken,
//         })
//
//         spotifyApi
//             .refreshAccessToken()
//             .then((data) => {
//                 console.log(data.body)
//             })
//             .catch(err => {
//                 console.log(err)
//                 res.sendStatus(400)
//             })
//     }
//     catch (err) {
//         console.log(err)
//         res.status(500).json({success: false, error: err.message})
//     }
// }