import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet"
import "./app.scss"

import ReactGA from "react-ga"

import NowListening from "./components/nowListening"
import StyleSwitcher from "./components/styleSwitcher"

import Home from "./components/home"
import About from "./components/about"
import Work from "./components/work"
import Shop from "./components/shop"
import Start from "./components/start"
import Music from "./components/music"
import Else from "./components/else"
import Error from "./components/error"

const routeHome = () => <Home />
const routeAbout = () => <About />
const routeWork = () => <Work />
const routeShop = () => <Shop />
const routeStart = () => <Start />
const routeMusic = () => <Music />
const routeError = () => <Error />
const routeElse = () => <Else />

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS)
ReactGA.pageview(window.location.pathname + window.location.search)

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorMode: "dark",
            textColor: "#000",
            backgroundColor: "#fff"
        }
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <Helmet>
                        <meta charSet="utf-8" />
                        <meta description="the website and portfolio of simeon charles" />
                        <meta keywords="bysimeon, simeon, charles, website, northwestern, photography, engineer, software, developer, programmer" />
                        <meta name="viewport" />
                        <meta authoer="simeon" />
                        <meta content="width=device-width, initial-scale=1.0" />
                    </Helmet>
                    <div className="top">
                        <div className="corner">
                            <StyleSwitcher />
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
                                shop
                            </NavLink> */}
                            <NavLink to="/photos/" activeClassName="current-page">
                                {" "}
                                photos
                            </NavLink>
                        </div>
                    </div>
                    <div className="undertop" />
                    <div className="bottom">
                        <NowListening />
                        <div className="corner">
                            <Link to="/start/">***</Link>
                        </div>
                    </div>
                    <Switch>
                        <Route exact path="/" component={routeHome} />
                        <Route path="/about/" component={routeAbout} />
                        <Route path="/work/" component={routeWork} />
                        <Route path="/shop/" component={routeShop} />
                        <Route path="/start/" component={routeStart} />
                        <Route path="/music/" component={routeMusic} />
                        <Route path="/photos/" component={routeElse} />
                        <Route component={routeError} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
