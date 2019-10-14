import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet"
import "./app.scss"

import NowListening from "./components/nowListening"
import Toggle from "./components/toggle"

import Home from "./components/home"
import About from "./components/about"
import Work from "./components/work"
import Project from "./components/work/project"
import Shop from "./components/shop"
import Start from "./components/start"
import Music from "./components/music"
import Else from "./components/else"
import Error from "./components/error"

const routeHome = () => <Home />
const routeAbout = () => <About />
const routeWork = () => <Work />
const routeProject = () => <Project />
const routeShop = () => <Shop />
const routeStart = () => <Start />
const routeMusic = () => <Music />
const routeError = () => <Error />
const routeElse = () => <Else />

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

class App extends Component {
    constructor() {
        super()
        this.state = {
            timespan: "7",
            limit: 50,
            topArtists: null,
            topTracks: null,
            topAlbums: null,
            recentTracks: null,
            userInfo: null
        }
        this.updateTimespan = this.updateTimespan.bind(this)
    }

    getJSON(request, time) {
        let xhr = new XMLHttpRequest()
        xhr.open(
            "GET",
            apibase +
                "?method=user." +
                request +
                "&user=" +
                user +
                "&period=" +
                timespanConvert[time] +
                "&limit=" +
                this.state.limit +
                "&api_key=" +
                apikey +
                "&format=json"
        )
        xhr.onload = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    switch (request) {
                        case "gettopartists":
                            this.setState({
                                topArtists: JSON.parse(xhr.responseText)
                            })
                            break
                        case "gettoptracks":
                            this.setState({
                                topTracks: JSON.parse(xhr.responseText)
                            })
                            break
                        case "gettopalbums":
                            this.setState({
                                topAlbums: JSON.parse(xhr.responseText)
                            })
                            break
                        case "getinfo":
                            this.setState({
                                userInfo: JSON.parse(xhr.responseText)
                            })
                            break
                        case "getrecenttracks":
                            this.setState({
                                recentTracks: JSON.parse(xhr.responseText)
                            })
                            break
                        default:
                            break
                    }
                }
            }
        }
        xhr.send()
    }

    updateData(time) {
        if (!time) {
            time = this.state.timespan
            this.getJSON("getinfo", time)
        }
        this.getJSON("getrecenttracks", time)
        this.getJSON("gettopartists", time)
        this.getJSON("gettoptracks", time)
        this.getJSON("gettopalbums", time)
    }

    updateTimespan(event) {
        this.setState({
            timespan: event.target.value
        })
        console.log(event.target.value)
        this.updateData(event.target.value)
    }

    componentWillMount() {
        this.updateData()
        let recentInterval = setInterval(() => {
            this.getJSON("getrecenttracks", "30")
        }, 1000)
        this.setState({
            setInterval: recentInterval
        })
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <meta
                            name="description"
                            content="the website and portfolio of simeon"
                        />
                        <meta
                            name="keywords"
                            content="bysimeon, simeon, website, northwestern, photography, engineer, software, developer, programmer, photographer, music"
                        />
                        <meta
                            name="viewport"
                            content="width=device-width, initial-scale=1.0"
                        />
                        <meta name="author" content="simeon" />
                    </Helmet>
                    <div className="top">
                        <div className="corner">
                            <Toggle />
                        </div>
                        <div className="corner">
                            <NavLink
                                exact
                                to="/"
                                activeClassName="current-page"
                            >
                                {" "}
                                home{" "}
                            </NavLink>
                            <NavLink
                                to="/about/"
                                activeClassName="current-page"
                            >
                                {" "}
                                about
                            </NavLink>
                            <NavLink to="/work/" activeClassName="current-page">
                                {" "}
                                work{" "}
                            </NavLink>
                            <NavLink
                                to="/music/"
                                activeClassName="current-page"
                            >
                                {" "}
                                music
                            </NavLink>
                            {/* <NavLink to="/shop/" activeClassName="current-page">
                                {" "}
                                sale
                            </NavLink> */}
                            {/* <NavLink
                                to="/photos/"
                                activeClassName="current-page"
                            >
                                {" "}
                                photos
                            </NavLink> */}
                        </div>
                    </div>
                    <div className="banner">
                        <div className="ticker">
                            <div className="ticker__item">for hire!</div>
                            <div className="ticker__item">
                                full-time @ new york or remote!
                            </div>
                            <div className="ticker__item">full stack!</div>
                            <div className="ticker__item">
                                creative technologist!
                            </div>
                            <div className="ticker__item">
                                tell your employer!
                            </div>
                            <div className="ticker__item">freelance too!</div>
                            <div className="ticker__item">
                                e-commerce, portfolio, etc!
                            </div>
                            <div className="ticker__item">
                                limited quantity!
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <NowListening recentTracks={this.state.recentTracks} />
                        <div className="corner">
                            <Link to="/start/">***</Link>
                        </div>
                    </div>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/about/" component={About} />
                        <Route exact path="/shop/" component={Shop} />
                        <Route exact path="/work/" component={Work} />
                        <Route path="/work/:id" component={Project} />
                        <Route exact path="/start/" component={Start} />
                        <Route
                            exact
                            path="/music/"
                            render={props => (
                                <Music
                                    {...props}
                                    recentTracks={this.state.recentTracks}
                                    topArtists={this.state.topArtists}
                                    topAlbums={this.state.topAlbums}
                                    topTracks={this.state.topTracks}
                                    userInfo={this.state.userInfo}
                                    timespan={this.state.timespan}
                                    updateTimespan={this.updateTimespan.bind(
                                        this
                                    )}
                                />
                            )}
                        />
                        <Route exact path="/photos/" component={Else} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
