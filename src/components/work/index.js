import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class Work extends Component {
    render() {
        return (
            <div className="container container--work">
                <Helmet>
                    <title>work &ndash; bysimeon</title>
                </Helmet>
                <p className="medmedtext">
                    {" "}
                    some <span className="personal filter">
                        personal
                    </span> some <span className="paid filter">paid</span> some{" "}
                    <span className="unfinished filter">unfinished</span>
                </p>
                <ul className="projects">
                    <li className="paid">
                        the highly [w/
                        <a href="https://teahkbrands.com"> teah</a>] |{" "}
                        <a href="https://www.thehighly.co">live</a>
                    </li>
                    <li className="personal">
                        startpage | <a href="/start/">live</a>{" "}
                        <a href="https://github.com/bysimeon/startpage">repo</a>
                    </li>
                    <li className="unfinished">
                        tiilt lab |{" "}
                        <a href="http://tiilt.northwestern.edu/">live</a>
                    </li>
                    <li className="paid">
                        storymapjs [w/
                        <a href="https://knightlab.northwestern.edu/">
                            knight lab
                        </a>
                        ] | <a href="https://storymap.knightlab.com/">live</a>{" "}
                        <a href="https://github.com/NUKnightLab/StoryMapJS">
                            repo
                        </a>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Work
