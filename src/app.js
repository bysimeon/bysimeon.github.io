import React, { Component } from "react"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import { NavLink } from "react-router-dom"
import { Helmet } from "react-helmet";
import "./app.scss"

import NowListening from "./components/nowListening"
import StyleSwitcher from "./components/styleSwitcher"
import colorSchemes from "./data/colorSchemes.json"

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

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colorMode: 1,
            textColor: "#000",
            backgroundColor: "#fff"
        }
    }

    changeStyles() {
        let colorMode = this.state.colorMode
        this.setState({
            textColor:
                colorSchemes.themes[colorMode % colorSchemes.themes.length]
                    .textColor,
            backgroundColor:
                colorSchemes.themes[colorMode % colorSchemes.themes.length]
                    .backgroundColor,
            colorMode: colorMode + 1
        })
    }

    render() {
        const selectedStyle = {
            background: this.state.backgroundColor,
            color: this.state.textColor
        }

        return (
            <Router>
                <div className="App" style={selectedStyle}>
                    <div className="top">
                        <div className="corner">
                            <StyleSwitcher
                                changeStyles={this.changeStyles.bind(this)}
                            />
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
                            {/* <NavLink to="/else/" activeClassName="current-page">
                                {" "}
                                else
                            </NavLink> */}
                        </div>
                    </div>
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
                        <Route path="/else/" component={routeElse} />
                        <Route component={routeError} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App
