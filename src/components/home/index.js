import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class Home extends Component {
    render() {
        return (
            <div className="container container--home">
                <Helmet>
                    <title>bysimeon</title>
                    <link rel="canonical" href="https://bysimeon.com/" />
                </Helmet>
                <h1 className="bigbigtext">
                    <span>bysimeon</span>
                </h1>
                <h1 className="bigbigtext bigbigtext--second">
                    <span>bysimeon</span>
                </h1>
            </div>
        )
    }
}

export default Home
