import SpotifyWebApi from "spotify-web-api-node";

export const signIn = async (req, res) => {
    // Defining the client_id and redirect_uri
    const clientId = process.env.CLIENT_ID
    const redirectUri = process.env.REDIRECT_URI
    const clientSecret = process.env.CLIENT_SECRET

    try {
        const spotifyApi = new SpotifyWebApi({
            redirectUri,
            clientId,
            clientSecret
        })

        const code = req.body.code

        spotifyApi.authorizationCodeGrant(code).then((data) => {
            res.json({
                accessToken: data.body.access_token,
                refreshToken: data.body.refresh_token,
                expiresIn: data.body.expires_in,
            })
        }).catch((err) => {
            console.log(err)
            res.sendStatus(400)
        })
    } catch (err) {
        console.log(err)
        res.status(500).json({success: false, error: err.message})
    }
}

