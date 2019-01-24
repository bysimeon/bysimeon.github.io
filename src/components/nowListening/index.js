import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import "./style.scss"

const apikey = "a7f8dd0989ae6f42d1be2c4427767c6f"
const apibase = "https://ws.audioscrobbler.com/2.0/"
const user = "theblindlookout"

class NowListening extends Component {
    constructor() {
        super()
        this.state = {
            playing: null,
            songName: null,
            songUrl: null,
            artistName: null,
            artistUrl: null,
            notScrobbling: "nothing, but recently heard",
            userProfile: "https://www.last.fm/user/" + user
        }
    }

    nowPlaying() {
        let xhr = new XMLHttpRequest()
        xhr.open(
            "GET",
            apibase +
                "?method=user.getrecenttracks&user=" +
                user +
                "&api_key=" +
                apikey +
                "&format=json"
        )
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    let json = JSON.parse(xhr.responseText)
                    let songName = json.recenttracks.track[0].name
                    let artistName = json.recenttracks.track[0].artist["#text"]
                    let playing
                    if (
                        typeof json.recenttracks.track[0]["@attr"] ===
                        "undefined"
                    ) {
                        playing = false
                    } else {
                        playing = true
                    }
                    if (songName.length >= 50) {
                        if (songName.includes("(f")) {
                            songName = songName.substr(
                                0,
                                songName.indexOf(" (f")
                            )
                        } else {
                            songName = songName.substr(0, 50) + "..."
                        }
                    }
                    if (playing) {
                        this.setState({
                            playing: playing,
                            songName: songName,
                            artistName: artistName,
                            songUrl: json.recenttracks.track[0].url,
                            artistUrl: "https://www.last.fm/music/" + artistName
                        })
                    } else {
                        this.setState({
                            playing: false,
                            songName: null,
                            artistName: null,
                            songUrl: null,
                            artistUrl: null
                        })
                    }
                }
            }
        }
        xhr.send()
    }

    componentDidMount() {
        this.nowPlaying()
        setInterval(() => {
            this.nowPlaying()
        }, 500)
    }

    render() {
        return (
            <div className="corner" id="song">
                <Link to='/music/' className="hidden-link">
                    {" "}
                    listening to:&nbsp;
                </Link>

                {this.state.playing && (
                    <span>
                        <a id="songName" href={this.state.songUrl}>
                            {" "}
                            {this.state.songName}{" "}
                        </a>
                        <span id="filler"> by </span>
                        <a id="artistName" href={this.state.artistUrl}>
                            {" "}
                            {this.state.artistName}
                        </a>
                    </span>
                )}

                {this.state.playing === false && (
                    <span>
                        <Link id="notScrobbling" to="/music/">
                            {this.state.notScrobbling}
                        </Link>
                    </span>
                )}
            </div>
        )
    }
}

export default NowListening