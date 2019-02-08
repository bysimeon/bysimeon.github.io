import React, { Component } from "react"
import "./style.scss"
import Image from "./image"

class Images extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            path: "/images/",
            loadedImageCount: 0
        }
    }

    createImages() {
        let images = []
        for (let i = 0; i < 7; i++) {
            images.push(this.state.path + "image" + i + ".jpg")
        }
        this.setState({
            images: images
        })
    }

    imageLoaded() {
        this.setState({
            loadedImageCount: this.state.loadedImageCount + 1
        })
    }

    componentDidMount() {
        this.createImages()
    }

    render() {
        let images = []
        this.state.images.forEach(image => {
            images.push(
                <Image loaded={this.imageLoaded.bind(this)} url={image} key={image} />
            )
        })
        return (
            <div className="images">
                {images}
                {this.state.loadedImageCount > 5 && (
                    <p className="description">
                        that's the end of pictures taken bysimeon
                    </p>
                )}
            </div>
        )
    }
}

export default Images
