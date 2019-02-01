import React, { Component } from "react"
import "./style.scss"
import bookmarks from "../../../data/bookmarks.json"
import searchEngines from "../../../data/searchEngines.json"

const isUrl = new RegExp(
    /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
)

class Search extends Component {
    constructor() {
        super()
        this.state = {
            currentText: "",
            searchMod: false,
            searchEngine: "google",
            bookmark: false,
            key: false,
            background: false,
            color: false,
            url: "https://google.com/search?q=",
            searching: false
        }
    }

    inputChange = text => {
        let currentText = text.target.value.trim().toLowerCase()
        let key = text.target.value
            .trim()
            .substr(0, 2)
            .toLowerCase()
        this.setState({
            currentText: currentText,
            key: key
        })
        this.checkSearchEngines(currentText, key)
    }

    enterPressed = e => {
        if (e.keyCode === 13) {
            if (this.state.searchMod) {
                if (this.state.bookmark) {
                    this.search(this.state.url)
                } else {
                    this.search(
                        this.state.url +
                            this.state.currentText
                                .substr(this.state.key.length)
                                .trim()
                    )
                }
            } else if (isUrl.test(this.state.currentText)) {
                this.setState({
                    searchEngine: "url"
                })
                this.search(this.state.currentText)
            } else {
                this.search(this.state.url + this.state.currentText)
            }
        }
        if (e.keyCode === 32) {
            this.nameInput.focus()
        }
    }

    search(url) {
        if (!url.match(/^https?:\/\//i)) {
            url = "http://" + url
        }
        window.open(url, "_self")
        this.setState({
            searching: true
        })
    }

    checkSearchEngines(text, key) {
        if (key in searchEngines) {
            this.setState({
                searchMod: "searchEngine",
                searchEngine: searchEngines[key][0],
                url: searchEngines[key][1],
                background: searchEngines[key][2],
                color: searchEngines[key][3],
                key: key
            })
            this.props.changeBackground(
                searchEngines[key][0],
                searchEngines[key][3]
            )
        } else if (text.trim().toLowerCase() in searchEngines) {
            key = text.trim().toLowerCase()
            this.setState({
                searchMod: "searchEngine",
                searchEngine: searchEngines[key][0],
                url: searchEngines[key][1],
                background: searchEngines[key][2],
                color: searchEngines[key][3],
                key: key
            })
            this.props.changeBackground(
                searchEngines[key][0],
                searchEngines[key][3]
            )
        } else {
            this.checkBookmarks(text)
        }
    }

    checkBookmarks(text) {
        if (text.trim().toLowerCase() in bookmarks) {
            this.setState({
                searchMod: "bookmark",
                searchEngine: bookmarks[text][0],
                bookmark: bookmarks[text][0],
                url: bookmarks[text][1],
                background: bookmarks[text][2],
                color: bookmarks[text][3]
            })
            this.props.changeBackground(bookmarks[text][0], bookmarks[text][3])
        } else {
            this.setState({
                searchMod: false,
                searchEngine: "google",
                background: false,
                bookmark: false,
                color: false,
                key: false,
                url: "https://google.com/search?q="
            })
            this.props.changeBackground("", "")
        }
    }

    componentDidMount() {
        this.nameInput.focus()
        document.addEventListener("keypress", this.enterPressed)
    }

    render() {
        let fieldStyle,
            modeStyle = {}
        if (this.state.background && this.state.color) {
            fieldStyle = {
                background: "linear-gradient" + this.state.background
            }
            modeStyle = {
                color: this.state.color
            }
        }
        let searchClass = ""
        if (this.state.searching) {
            searchClass = "move-off-right"
        }
        return (
            <div id="inline-search">
                <div id="search-mode" className={searchClass} style={modeStyle}>
                    {this.state.searchEngine} <span className="loading" />
                </div>
                <input
                    className={searchClass}
                    id="search-field"
                    type="text"
                    name="search-field"
                    onChange={this.inputChange.bind(this)}
                    onKeyUp={this.enterPressed.bind(this)}
                    style={fieldStyle}
                    ref={input => {
                        this.nameInput = input
                    }}
                />
            </div>
        )
    }
}

export default Search
