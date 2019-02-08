import React, { Component } from "react"
import "./style.scss"

class Image extends Component {
    constructor() {
        super()
        this.state = {
            loaded: false,
            preview: false
        }
    }

    handleImageLoaded() {
        this.setState({ loaded: true })
        this.props.loaded()
    }

    handleImageErrored() {
        this.setState({ imageStatus: null })
    }

    loadPreview() {
        this.setState({
            preview: true
        })
    }

    render() {
        let classes = "image-container"
        if (this.state.loaded) {
            classes += " image-container--loaded"
        }
        return (
            <div className={classes}>
                <img
                    onClick={this.loadPreview.bind(this)}
                    onLoad={this.handleImageLoaded.bind(this)}
                    className="image"
                    src={this.props.url}
                    alt="..."
                />
            </div>
        )
    }
}

export default Image
