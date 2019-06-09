import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class Home extends Component {
    render() {
        return (
            <div className="container container--home">
                <Helmet>
                    <title>bysimeon</title>
                    <meta description="the website and portfolio of simeon charles" />
                    <meta keywords="bysimeon, simeon, charles, website, northwestern, photography, engineer, software, developer, programmer" />
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
