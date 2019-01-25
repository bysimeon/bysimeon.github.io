import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class Home extends Component {
    render() {
        return (
            <div className="container container--home">
                <Helmet>
                    <title>bysimeon</title>
                </Helmet>
                <div className="bigbigtext">
                    <span>bysimeon</span>
                </div>
                <div className="bigbigtext bigbigtext--second">
                    <span>bysimeon</span>
                </div>
            </div>
        )
    }
}

export default Home
