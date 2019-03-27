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
                <div className="actuallysmalltext" />

                <Images path="/images/color/" count={5} tag={"color"}/>
                <Images path="/images/black/" count={7} tag={"black"}/>
            </div>
        )
    }
}

export default Else