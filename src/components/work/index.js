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
                <div className="projects">
                    <div className="project paid">
                        <b>the highly</b> with{" "}
                        <a href="https://teahkbrands.com"> teah</a> |{" "}
                        <a href="https://www.thehighly.co">live</a>{" "}
                        <a href="https://web.archive.org/web/20181203171025/https://www.thehighly.co/">
                            archive
                        </a>
                    </div>
                    <div className="personal project">
                        <b>startpage</b> | <a href="/start/">live</a>{" "}
                        <a href="https://github.com/bysimeon/startpage">repo</a>
                    </div>
                    <div className="paid project">
                        <b>storymapjs</b> with{" "}
                        <a href="https://knightlab.northwestern.edu/">
                            knight lab
                        </a>{" "}
                        | <a href="https://storymap.knightlab.com/">live</a>{" "}
                        <a href="https://github.com/NUKnightLab/StoryMapJS">
                            repo
                        </a>
                    </div>
                    <div className="personal project">
                        <b>vista del valle</b> with{" "}
                        <a href="https://teahkbrands.com/">teah</a> |{" "}
                        <a href="https://vistadv.github.io/">live</a>{" "}
                    </div>
                    <div className="personal project">
                        <b>the grapplers</b> with{" "}
                        <a href="https://github.com/AndrewBridgeman">andrew</a>
                        {" & "}
                        <a href="http://zacharyrmckee.com/home/">zach</a> |{" "}
                        <a href="https://github.com/bysimeon/tentativetitle/releases">
                            play
                        </a>{" "}
                        <a href="https://github.com/bysimeon/tentativetitle/">
                            repo
                        </a>{" "}
                    </div>
                    <div className="unfinished paid project">
                        <b>tiilt lab website</b> with{" "}
                        <a href="https://github.com/durellg">durell</a> |{" "}
                        <a href="http://tiilt.northwestern.edu/">
                            workinprogress
                        </a>
                    </div>

                    <div className="personal project">
                        <b>papi</b> with{" "}
                        <a href="https://github.com/deokfilho">deok</a>
                        {" & "}
                        <a href="https://github.com/addierohrbach">
                            addie
                        </a> |{" "}
                        <a href="https://papi-law.herokuapp.com/">
                            workinprogress
                        </a>{" "}
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
