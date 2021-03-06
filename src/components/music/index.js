import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

import tAr from "../../data/topArtists.json"
import tAl from "../../data/topAlbums.json"
import tTr from "../../data/topTracks.json"
import u from "../../data/user.json"
import rTr from "../../data/recentTracks.json"

import Artist from "./artists"
import Album from "./albums"
import Track from "./tracks"
import Recent from "./recents"

const apikey = process.env.REACT_APP_LASTFM_API_KEY
const apibase = "https://ws.audioscrobbler.com/2.0/"
const user = "theblindlookout"
const timespanConvert = {
    "7": "7day",
    "30": "1month",
    "90": "3month",
    "180": "6month",
    "365": "12month",
    "???": "overall"
}

class Music extends Component {
    constructor() {
        super()
        this.state = {
            limit: 50,
            timespan: "7",
            topArtists: tAr,
            topTracks: tTr,
            topAlbums: tAl,
            recentTracks: rTr,
            userInfo: u,
            selectedArtist: false,
            selectedArtistID: false,
            hoveredArtist: false,
            hoveredArtistID: false,
            setInterval: false
        }
        this.selectArtist = this.selectArtist.bind(this)
        this.updateTimespan = this.updateTimespan.bind(this)
    }

    updateTimespan(event) {
        this.setState({
            timespan: event.target.value
        })
        console.log(event.target.value)
        this.props.updateTimespan(event)
    }

    unixTimestamp(t) {
        if (t === "now playing") {
            return t
        }
        var dt = new Date(t * 1000)
        var nd = new Date()
        var milliseconds = nd.getTime() - dt.getTime()
        var days = Math.floor(milliseconds / 86400000) // days
        var hours = Math.floor((milliseconds % 86400000) / 3600000) // hours
        var minutes = Math.round(((milliseconds % 86400000) % 3600000) / 60000) // minutes
        if (days > 0) {
            if (days > 1) {
                return days.toString() + " days ago"
            } else {
                return days.toString() + " day ago"
            }
        } else if (hours > 0) {
            if (hours > 1) {
                return hours.toString() + " hours ago"
            } else {
                return hours.toString() + " hour ago"
            }
        } else {
            if (minutes > 1) {
                return minutes.toString() + " mins ago"
            } else {
                return minutes.toString() + " min ago"
            }
        }
    }

    selectArtist(e) {
        this.setState({
            selectedArtist: e.target.getAttribute("artist"),
            selectedArtistID: e.target.getAttribute("artistid")
        })
    }

    hoverArtist(e) {
        this.setState({
            hoveredArtist: e.target.getAttribute("artist"),
            hoveredArtistID: e.target.getAttribute("artistid")
        })
    }

    componentWillMount() {
        if (this.props.topArtists) {
            this.setState({
                topArtists: this.props.topArtists,
                topTracks: this.props.topTracks,
                topAlbums: this.props.topAlbums,
                recentTracks: this.props.recentTracks,
                userInfo: this.props.userInfo,
                timespan: this.props.timespan
            })
        }
    }

    componentDidMount() {
        let recentInterval = setInterval(() => {
            if (this.props.topArtists) {
                this.setState({
                    topArtists: this.props.topArtists,
                    topTracks: this.props.topTracks,
                    topAlbums: this.props.topAlbums,
                    recentTracks: this.props.recentTracks,
                    userInfo: this.props.userInfo,
                    timespan: this.props.timespan
                })
            }
        }, 80)
        this.setState({
            setInterval: recentInterval
        })
    }

    componentWillUnmount() {
        clearInterval(this.state.setInterval)
    }

    render() {
        let artists = []
        let albums = []
        let tracks = []
        let recents = []
        let trackplays = 0

        if (
            this.state.topArtists &&
            this.state.topTracks &&
            this.state.topAlbums
        ) {
            this.state.topArtists.topartists.artist.forEach(artist => {
                artists.push(
                    <Artist
                        artist={artist.name}
                        artistID={artist.mbid}
                        playcount={artist.playcount}
                        url={artist.url}
                        key={artist.name}
                        selected={this.state.selectedArtist}
                        selectedID={this.state.selectedArtistID}
                        selectArtist={this.selectArtist.bind(this)}
                        hovered={this.state.hoveredArtist}
                        hoveredID={this.state.hoveredArtistID}
                        hoverArtist={this.hoverArtist.bind(this)}
                    />
                )
            })

            this.state.topAlbums.topalbums.album.forEach(album => {
                albums.push(
                    <Album
                        album={album.name}
                        artistID={album.artist.mbid}
                        artist={album.artist.name}
                        playcount={album.playcount}
                        url={album.url}
                        key={album.name + album.artist}
                        selected={this.state.selectedArtist}
                        selectedID={this.state.selectedArtistID}
                        selectArtist={this.selectArtist.bind(this)}
                        hovered={this.state.hoveredArtist}
                        hoveredID={this.state.hoveredArtistID}
                        hoverArtist={this.hoverArtist.bind(this)}
                    />
                )
            })

            this.state.topTracks.toptracks.track.forEach(track => {
                trackplays += parseInt(track.playcount)
                tracks.push(
                    <Track
                        track={track.name}
                        artistID={track.artist.mbid}
                        artist={track.artist.name}
                        playcount={track.playcount}
                        url={track.url}
                        key={track.name + track.artist.name}
                        selected={this.state.selectedArtist}
                        selectedID={this.state.selectedArtistID}
                        selectArtist={this.selectArtist.bind(this)}
                        hovered={this.state.hoveredArtist}
                        hoveredID={this.state.hoveredArtistID}
                        hoverArtist={this.hoverArtist.bind(this)}
                    />
                )
            })
        }

        if (this.state.recentTracks) {
            this.state.recentTracks.recenttracks.track.forEach(track => {
                if (track.date) {
                    recents.push(
                        <Recent
                            track={track.name}
                            artistID={track.artist.mbid}
                            artist={track.artist["#text"]}
                            playcount={track.playcount}
                            url={track.url}
                            key={track.name + track.date.uts}
                            selected={this.selectedArtist}
                            selectedID={this.selectedArtistID}
                            time={track.date.uts}
                            unixTimestamp={this.unixTimestamp}
                        />
                    )
                } else {
                    recents.push(
                        <Recent
                            track={track.name}
                            artistID={track.artist.mbid}
                            artist={track.artist["#text"]}
                            playcount={track.playcount}
                            url={track.url}
                            key={track.name + track.time}
                            selected={this.selectedArtist}
                            selectedID={this.selectedArtistID}
                            time="now playing"
                            unixTimestamp={this.unixTimestamp}
                        />
                    )
                }
            })
        }

        return (
            <div className="container container--music">
                <Helmet>
                    <title>music &ndash; bysimeon</title>
                </Helmet>
                <h1 className="medmedtext medmedtext--music"> listened to: </h1>

                <p className="notsmalltext notsmalltext--music">
                    i've been tracking the music i listen to since 2015. since
                    then i've listened to around{" "}
                    {this.state.userInfo ? (
                        <span>
                            {this.state.userInfo.user.playcount
                                .toString()
                                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
                        </span>
                    ) : (
                        <span>000,000</span>
                    )}{" "}
                    songs, all tracked through{" "}
                    {this.state.userInfo ? (
                        <span>
                            <a href={this.state.userInfo.user.url}> last.fm </a>{" "}
                        </span>
                    ) : (
                        <span>
                            <a href="https://www.last.fm/"> last.fm </a>{" "}
                        </span>
                    )}
                    . here's a breakdown of what i've been listening to for the
                    past{" "}
                    <select
                        value={this.state.timespan}
                        onChange={this.updateTimespan}
                        className="dropdown dropdown--music"
                    >
                        <option>7</option>
                        <option>30</option>
                        <option>90</option>
                        <option>180</option>
                        <option>365</option>
                        <option>???</option>
                    </select>{" "}
                    days.
                </p>
                <p className="notsmalltext notsmalltext--music">
                    note: currently using an modified ipod classic, so live
                    music tracking is less frequent.
                </p>

                <div className="music">
                    <div className="artists music__column">
                        <div className="music__column__item">
                            <div className="music__column__item__title">
                                top artists
                            </div>
                            <div className="music__column__item__plays">
                                plays
                            </div>
                        </div>
                        {artists}
                    </div>
                    <div className="albums music__column">
                        <div className="music__column__item">
                            <div className="music__column__item__title">
                                top albums
                            </div>
                            <div className="music__column__item__plays">
                                plays
                            </div>
                        </div>
                        {albums}
                    </div>
                    <div className="songs music__column">
                        <div className="music__column__item">
                            <div className="music__column__item__title">
                                top tracks
                            </div>
                            <div className="music__column__item__plays">
                                plays
                            </div>
                        </div>
                        {tracks}
                    </div>
                </div>
                <div className="music music--recent">
                    <div className="songs music__column music__column--recent">
                        <div className="music__column__item">
                            <div className="music__column__item__title">
                                recently played
                            </div>
                            <div className="music__column__item__plays">
                                {" "}
                                when
                            </div>
                        </div>
                        {recents}
                    </div>
                    {this.state.topArtists &&
                        this.state.topAlbums &&
                        this.state.topTracks && (
                            <div className="songs music__column music__column--totals">
                                <div className="music__column__item">
                                    {this.state.timespan} day total
                                </div>
                                <div className="music__column__item">
                                    <div className="music__column__item__title">
                                        unique artists
                                    </div>
                                    <div className="music__column__item__plays">
                                        {
                                            this.state.topArtists.topartists[
                                                "@attr"
                                            ].total
                                        }
                                    </div>
                                </div>
                                <div className="music__column__item">
                                    <div className="music__column__item__title">
                                        unique albums
                                    </div>
                                    <div className="music__column__item__plays">
                                        {
                                            this.state.topAlbums.topalbums[
                                                "@attr"
                                            ].total
                                        }
                                    </div>
                                </div>
                                <div className="music__column__item">
                                    <div className="music__column__item__title">
                                        unique tracks
                                    </div>
                                    <div className="music__column__item__plays">
                                        {
                                            this.state.topTracks.toptracks[
                                                "@attr"
                                            ].total
                                        }
                                    </div>
                                </div>
                                {/* <div className="music__column__item">
                                    <div className="music__column__item__title">
                                        tracks played
                                    </div>
                                    <div className="music__column__item__plays">
                                        {trackplays}
                                    </div>
                                </div> */}
                            </div>
                        )}
                </div>
            </div>
        )
    }
}

export default Music
