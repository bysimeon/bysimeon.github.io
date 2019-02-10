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
        console.log(this.state.loadedImageCount)
    }

    componentDidMount() {
        this.createImages()
    }

    render() {
        let images = []
        this.state.images.forEach(image => {
            images.push(
                <Image
                    loaded={this.imageLoaded.bind(this)}
                    url={image}
                    key={image}
                />
            )
        })
        return (
            <div className="images">
                {images}
                <p className="description">
                    {this.state.loadedImageCount >= 7 ? (
                        <span>pictures taken bysimeon</span>
                    ) : (
                        <span>loading pictures taken bysimeon</span>
                    )}
                </p>
            </div>
        )
    }
}

export default Images
