import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class Else extends Component {
    render() {
        return (
            <div className="container container--home">
                <Helmet>
                    <title>else &ndash; bysimeon</title>
                </Helmet>
                <div className="bigbigtext">
                    <span>huh</span>
                </div>
            </div>
        )
    }
}

export default Else
