import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class About extends Component {
    render() {
        return (
            <div className="container container--about">
                <Helmet>
                    <title>about &ndash; bysimeon</title>
                </Helmet>
                <div className="textbox">
                    <h1 className="medmedtext medmedtext--about">
                        {" "}
                        simeon, a computer science and psychology student at
                        northwestern university{" "}
                    </h1>
                    <ul className="notsmalltext">
                        <li> developer </li>
                        <li> designer </li>
                        <li> researcher </li>
                    </ul>
                    <p className="about-links">
                        hire:{" "}<a href="/resume.pdf">resume</a>
                        <br />
                        contact:{" "}
                        <a href="mailto:mail@bysimeon.com">mail@bysimeon.com</a>
                        <br /> pull request:{" "}
                        <a href="https://github.com/bysimeon">
                            github/bysimeon
                        </a>
                        <br /> listen:{" "}
                        <a href="https://www.last.fm/user/theblindlookout">
                            {" "}
                            last.fm/thblndlkt
                        </a>{" "}
                        &{" "}
                        <a href="https://soundcloud.com/bysimeon">
                            soundcloud/&!
                        </a>
                        <br /> collect:{" "}
                        <a href="https://www.are.na/s/all?sort=UPDATED_AT">
                            are.na/s*
                        </a>
                        <br /> ride:{" "}
                        <a href="https://www.pedalroom.com/bike/-38950">
                            pedal/438672
                        </a>
                    </p>
                </div>
                <img
                    draggable="false"
                    className="lazy drawing"
                    data-src="/assets/photos/me2.png"
                    alt=""
                />
            </div>
        )
    }
}

export default About
