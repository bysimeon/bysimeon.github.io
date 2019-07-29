import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

import Images from "./images"

class Else extends Component {
    render() {
        return (
            <div className="container container--else">
                <Helmet>
                    <title>photos &ndash; bysimeon</title>
                </Helmet>
                <div className="actuallysmalltext" />

                <Images
                    path="/assets/images/color/"
                    count={20}
                    tag={"color photos taken bysimeon"}
                    label={true}
                />
                <Images
                    path="/assets/images/black/"
                    count={9}
                    tag={"black photos taken bysimeon"}
                    label={true}
                />
            </div>
        )
    }
}

export default Else
