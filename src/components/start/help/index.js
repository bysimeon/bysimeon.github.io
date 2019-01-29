import React, { Component } from "react"
import "./style.scss"

class Help extends Component {
    render() {
        return (
            <div id="command" className="fade">
                <div id="close1" />
                <div id="command-list">
                    press
                    <span> space </span> to focus the searchbox,
                    <span> google </span> is used by default. enter a
                    <span> url </span> to open that webpage. search specific
                    sites by using one of the following shortcuts before your
                    query:
                    <ul>
                        <li> reddit (r:)</li>
                        <li>
                            {" "}
                            subreddits (r/examplesubreddit goes to
                            examplesubreddit){" "}
                        </li>
                        <li> youtube (y:) </li>
                        <li> soundcloud (s:) </li>
                        <li> translate (t:)</li>
                        <li> myanimelist (a:)</li>
                        <li> google drive (d:)</li>
                        <li> github (g:)</li>
                        <li> lyrics (l:)</li>
                        <li> netflix (n:)</li>
                        <li> unsplash (u:)</li>
                        <li> localhost (::)</li>
                    </ul>
                    press
                    <span> esc </span> to clear the searchbox and close this
                    help page.
                    <br />
                    <br /> p.s. the song displayed at the bottom right is my
                    most recent track from
                    <a href="https://www.last.fm/user/theblindlookout">
                        last.fm
                    </a>
                </div>
            </div>
        )
    }
}

export default Help
