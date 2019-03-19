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
                <h1 className="medmedtext">
                    {" "}
                    some <span className="personal filter">
                        personal
                    </span> some <span className="paid filter">paid</span> some{" "}
                    <span className="unfinished filter">unfinished</span>
                </h1>
                <ul className="projects">
                    <li className="paid">
                        the highly [w/{" "}
                        <a href="https://teahkbrands.com"> teah</a>] |{" "}
                        <a href="https://www.thehighly.co">live</a>{" "}
                        <a href="https://web.archive.org/web/20181203171025/https://www.thehighly.co/">
                            archive
                        </a>
                    </li>
                    <li className="personal">
                        startpage | <a href="/start/">live</a>{" "}
                        <a href="https://github.com/bysimeon/startpage">repo</a>
                    </li>
                    <li className="unfinished paid">
                        tiilt lab [w/{" "}
                        <a href="https://github.com/durellg">durell</a>] |{" "}
                        <a href="http://tiilt.northwestern.edu/">
                            workinprogress
                        </a>
                    </li>
                    <li className="paid">
                        storymapjs [w/{" "}
                        <a href="https://knightlab.northwestern.edu/">
                            knight lab
                        </a>
                        ] | <a href="https://storymap.knightlab.com/">live</a>{" "}
                        <a href="https://github.com/NUKnightLab/StoryMapJS">
                            repo
                        </a>
                    </li>
                    <li className="personal">
                        vista del valle [w/{" "}
                        <a href="https://teahkbrands.com/">teah</a>] |{" "}
                        <a href="https://vistadv.github.io/">live</a>{" "}
                    </li>
                    <li className="personal">
                        the grapplers [w/{" "}
                        <a href="https://github.com/AndrewBridgeman">andrew</a>
                        {" & "}
                        <a href="http://zacharyrmckee.com/home/">zach</a>] |{" "}
                        <a href="https://github.com/bysimeon/tentativetitle/releases">
                            download
                        </a>{" "}
                        <a href="https://vistadv.github.io/">repo</a>{" "}
                    </li>
                </ul>
            </div>
        )
    }
}

export default Work
