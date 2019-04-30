import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

import Images from "./images"

class Else extends Component {
    render() {
        return (
            <div className="container container--else">
                <Helmet>
                    <title>else &ndash; bysimeon</title>
                </Helmet>
                <div className="actuallysmalltext" />

                <Images
                    path="/assets/images/color/"
                    count={8}
                    tag={"color photos taken bysimeon"}
                />
                <Images
                    path="/assets/images/black/"
                    count={9}
                    tag={"black photos taken bysimeon"}
                />
            </div>
        )
    }
}

export default Else
