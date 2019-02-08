import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

import Arena from "./arena"
import Image from "./image"

class Else extends Component {
    render() {
        return (
            <div className="container container--else">
                <Helmet>
                    <title>else &ndash; bysimeon</title>
                </Helmet>
                <div className="actuallysmalltext">
                    {/* <span>yet to be properly catagorized and organized. for now it's all here. </span> */}
                </div>
                <Image />
            </div>
        )
    }
}

export default Else
