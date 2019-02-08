import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

import Arena from "./arena"
import Images from "./images"

class Else extends Component {
    render() {
        return (
            <div className="container container--else">
                <Helmet>
                    <title>else &ndash; bysimeon</title>
                </Helmet>
                <div className="actuallysmalltext">
                
                </div>
                <Images />
            </div>
        )
    }
}

export default Else
