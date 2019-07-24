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

class App extends Component {
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
                            <NavLink
                                to="/photos/"
                                activeClassName="current-page"
                            >
                                {" "}
                                photos
                            </NavLink>
                        </div>
                    </div>
                    <div className="banner">
                        <div class="ticker">
                            <div class="ticker__item">for hire!</div>
                            <div class="ticker__item">
                                full-time @ new york or remote!
                            </div>
                            <div class="ticker__item">full stack!</div>
                            <div class="ticker__item">
                                creative technologist!
                            </div>
                            <div class="ticker__item">tell your employer!</div>
                            <div class="ticker__item">freelance too!</div>
                            <div class="ticker__item">
                                e-commerce, portfolio, etc!
                            </div>
                            <div class="ticker__item">limited quantity!</div>
                        </div>
                    </div>
                    <div className="bottom">
                        <NowListening />
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
                        <Route exact path="/music/" component={Music} />
                        <Route exact path="/photos/" component={Else} />
                        <Route component={Error} />
                    </Switch>
                    <div className="invisible">&nbsp;</div>
                </div>
            </Router>
        )
    }
}

export default App
