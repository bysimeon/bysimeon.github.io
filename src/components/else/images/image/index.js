import React, { Component } from "react"
import "./style.scss"

class Image extends Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
        }
    }

    handleImageLoaded() {
        this.setState({ loaded: true })
        this.props.loaded()
    }

    handleImageErrored() {
        this.setState({ imageStatus: null })
    }

    render() {
        let classes = "image-container"
        if (this.state.loaded) {
            classes += " image-container--loaded"
        }
        return (
            <div className={classes}>
                <img
                    onClick={this.props.preview}
                    onLoad={this.handleImageLoaded.bind(this)}
                    className="image"
                    src={this.props.url}
                    alt="..."
                    id={this.props.index}
                />
            </div>
        )
    }
}

export default Image
