import React, { Component } from "react"
import LazyLoad from "react-lazyload"
import "./style.scss"

class Image extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            path: "/images/"
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

    componentDidMount() {
        this.createImages()
    }

    render() {
        let images = []
        this.state.images.forEach(image => {
            images.push(
                <LazyLoad key={image} once>
                    <img className="image" src={image} alt="..." />
                </LazyLoad>
            )
        })
        return (
            <div className="images">
                {images}
                <p className="description">
                    that's the end of pictures taken bysimeon
                </p>
            </div>
        )
    }
}

export default Image
