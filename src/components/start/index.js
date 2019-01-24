import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

import Time from "./time"
import Search from "./search"
import Weather from "./weather"
import Help from "./help"
class Start extends Component {
    render() {
        return (
            <div className="container container--start">
                <Helmet>
                    <title>launch &ndash; bysimeon</title>
                </Helmet>
                <Help />
                <Time />
                <Weather />
                <Search />
            </div>
        )
    }
}

export default Start
