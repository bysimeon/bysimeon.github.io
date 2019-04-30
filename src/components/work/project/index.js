import React, { Component } from "react"
import { Helmet } from "react-helmet"
// import "./style.scss"

import Images from "../../else/images"

class Project extends Component {
    render() {
        return (
            <div className="container container--else">
                <Helmet>
                    <title>
                        {this.props.match.params.project} &ndash; bysimeon
                    </title>
                </Helmet>
                <div className="actuallysmalltext" />

                <Images
                    path={
                        "/assets/images/" +
                        this.props.match.params.project +
                        "/"
                    }
                    count={7}
                    tag={this.props.match.params.project}
                />
            </div>
        )
    }
}

export default Project
