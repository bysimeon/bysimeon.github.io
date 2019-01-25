import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class Error extends Component {
    render() {
        return (
            <div className="container container--home">
                <Helmet>
                    <title>404 &ndash; bysimeon</title>
                </Helmet>
                <div className="bigbigtext">
                    <span>404</span>
                </div>
            </div>
        )
    }
}

export default Error
