import React, { Component } from "react"
import { Helmet } from "react-helmet"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
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
                        <a href="https://web.archive.org/web/20181203171025/https://www.thehighly.co/">
                            archive
                        </a>{" "}
                        <Link to="/work/thehighly"> gallery </Link>
                        <div className="project__description">
                            <div className="project__description__blurb">
                                a website hosting the interviews, travel guides
                                and product reviews of the cannabis editorial,
                                the highly.
                                <br />
                                <br />
                                co-designed, developed and managed the website,
                                newsletter and subscriber funnel.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    squarespace dev
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--des">
                                    mailchimp
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--des">
                                    google analytics
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--des">
                                    sketch
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--des">
                                    photoshop
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--des">
                                    illustrator
                                </span>
                            </div>
                        </div>
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
                        <div className="project__description">
                            <div className="project__description__blurb">
                                a free tool to help you tell stories on the web
                                that highlight the locations of a series of
                                events.
                                <br />
                                <br />
                                created local development for github
                                contributors, fixed bugs and improved
                                documentation.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    flask
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    node
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    mongodb
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="personal project">
                        <b>startpage</b> | <Link to="/start/">live</Link>{" "}
                        <a href="https://github.com/bysimeon/startpage">repo</a>
                        <div className="project__description">
                            <div className="project__description__blurb">
                                a{" "}
                                <a href="https://www.reddit.com/r/startpages">
                                    startpage
                                </a>
                                , goes anywhere on the web using custom
                                shortcuts and bookmarks.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    reactjs
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="personal project">
                        <b>this website</b> | <Link to="/">live</Link>{" "}
                        <div className="project__description">
                            <div className="project__description__blurb">
                                a website that serves as both my claimed space
                                on the internet and a place to develop and
                                showcase different{" "}
                                <Link to="/music"> experiments.</Link>
                               
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    reactjs
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    mongodb
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    express
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    node
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    nginx
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="personal project">
                        <b>vista del valle</b> with{" "}
                        <a href="https://teahkbrands.com/">teah</a> |{" "}
                        <a href="https://vistadv.github.io/">live</a>{" "}
                        <div className="project__description">
                            <div className="project__description__blurb">
                                a gallery of an ongoing construction project in
                                italy.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    jekyll
                                </span>
                            </div>
                        </div>
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
                        <div className="project__description">
                            <div className="project__description__blurb">
                                a fighting game about grappling robots who
                                attack eachother with their hooks and bombs.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    unity
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    csharp
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--des">
                                    asesprite
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="personal project">
                        <b>glocal</b> with{" "}
                        {/* <a href="https://github.com/esaatci">efe</a>
                        {" , "}
                        <a href="https://github.com/noiraG">garion</a>
                        {" , "}
                        <a href="https://github.com/jackburtis">jack</a>
                        {" & "}
                        <a href="https://github.com/HarishMundluru1998">
                            harish
                        </a>{" "} */}
                        <a href="https://github.com/cs394-w19/Aqua-Client-Project/graphs/contributors">
                            some others
                        </a>{" "}
                        | <a href="https://streamable.com/rkud7">demo</a>{" "}
                        <a href="https://github.com/cs394-w19/Aqua-Client-Project/">
                            repo
                        </a>{" "}
                        <div className="project__description">
                            <div className="project__description__blurb">
                                an phone application that creates travel
                                itineraries with activities personlizaed for the
                                user's taste.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    react native
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    expo
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    firestore
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="unfinished paid project">
                        <b>tiilt lab website</b> with{" "}
                        <a href="https://github.com/durellg">durell</a> |{" "}
                        <a href="http://tiilt.northwestern.edu/">
                            workinprogress
                        </a>
                        <div className="project__description">
                            <div className="project__description__blurb">
                                website for the Technological Innovations for
                                Inclusive Learning and Teaching lab at
                                northwestern university.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    javascript
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    sass
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--des">
                                    sketch
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="personal project">
                        <b>papi</b> with{" "}
                        <a href="https://github.com/deokfilho">deok</a>
                        {" & "}
                        <a href="https://github.com/addierohrbach">
                            addie
                        </a> | <Link to="/work/papi"> gallery </Link>
                        <div className="project__description">
                            <div className="project__description__blurb">
                                a web application made for{" "}
                                <a href="https://www.mayerbrown.com/en">
                                    mayer brown
                                </a>{" "}
                                that analyzes legal documents and creates
                                reports highlighting important clauses.
                            </div>
                            <div className="project__description__stack">
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    flask
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    jquery
                                </span>
                                <span className="project__description__stack__span project__description__stack__span--dev">
                                    postgres
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Work
