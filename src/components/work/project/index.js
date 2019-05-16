import React, { Component } from "react"
import { Helmet } from "react-helmet"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom"
import "./style.scss"
import projects from "../../../data/projects.json"

import Images from "../../else/images"

class Project extends Component {
    constructor() {
        super()
        this.state = {
            id: "",
            name: "",
            collaborators: "",
            stack: "",
            description: "",
            redirect: false,
            imageCount: false
        }
    }

    componentDidMount() {
        let id = this.props.match.params.id
        console.log(id)
        if (projects[id]) {
            let project = projects[id]
            this.setState({
                id: id,
                name: project.name,
                collaborators: project.collaborators,
                stack: project.stack,
                description: project.description,
                imageCount: project.imageCount
            })
        } else {
            this.setState({
                redirect: true
            })
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/404" />
        } else {
            return (
                <div className="container container--project">
                    <Helmet>
                        <title> {this.state.name} &ndash; bysimeon</title>
                    </Helmet>
                    <div className="actuallysmalltext" />
                    <h1 className="medmedtext medmedtext--project"> look! </h1>
                    <p className="notsmalltext notsmalltext--project">
                        {" "}
                        {this.state.description}{" "}
                    </p>
                    {this.state.imageCount && (
                        <Images
                            path={
                                "/assets/images/" +
                                this.props.match.params.id +
                                "/"
                            }
                            tag={this.props.match.params.id}
                            size={2}
                            count={this.state.imageCount}
                        />
                    )}
                </div>
            )
        }
    }
}

export default Project
