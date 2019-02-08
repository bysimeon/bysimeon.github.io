import React, { Component } from "react"
import "./style.scss"

class Images extends Component {
    constructor() {
        super()
        this.state = {
            loaded: false
        }
    }

    handleImageLoaded() {
        this.setState({ loaded: true });
    }

    handleImageErrored() {
        this.setState({ imageStatus: null });
    }

    render() {

        let classes = "image-container"
        if (this.state.loaded) {
            classes += " image-container--loaded"
        }
        return (
            <div className={classes}>
                    <img onLoad={this.handleImageLoaded.bind(this)} className="image" src={this.props.url} alt="..." />
            </div>
        )
    }
}

export default Images
