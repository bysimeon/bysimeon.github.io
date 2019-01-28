import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

import Time from "./time"
import Search from "./search"
import Weather from "./weather"
import Help from "./help"
class Start extends Component {
    constructor() {
        super()
        this.state = {
            searchMode: "",
            searchModeColor: ""
        }
    }

    changeBackground = (mode, color) => {
        this.setState({
            searchMode: mode,
            searchModeColor: color
        })
    }

    render() {
        let backgroundTextRepeat = (this.state.searchMode+" ").repeat(50)
        console.log(backgroundTextRepeat)

        return (
            <div className="container container--start">
                <Helmet>
                    <title>launch &ndash; bysimeon</title>
                </Helmet>
                <div className="modeBackground">{backgroundTextRepeat}</div>
                <Help />
                <Time />
                <Weather />
                <Search changeBackground={this.changeBackground} />
            </div>
        )
    }
}

export default Start
