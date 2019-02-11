import React, { Component } from "react"
import "./style.scss"
import Image from "./image"

class Images extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            path: "/images/",
            loadedImageCount: 0,
            preview: false,
            previewIndex: 0,
            totalImageCount: 7
        }
    }

    createImages() {
        let images = []
        for (let i = 0; i < this.state.totalImageCount; i++) {
            images.push({ url: this.state.path + "image" + i + ".jpg", id: i })
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

    loadPreview(e) {
        e.stopPropagation()
        let index = e.target.getAttribute("id")
        this.setState({
            preview: true,
            previewIndex: parseInt(index)
        })
    }

    UnloadPreview(e) {
        e.stopPropagation()
        this.setState({
            preview: false,
            previewIndex: 0
        })
    }

    nextPreview(e) {
        e.stopPropagation()
        this.setState({
            previewIndex:
                (this.state.previewIndex + 1) % this.state.totalImageCount
        })
    }

    previousPreview(e) {
        e.stopPropagation()
        let index = 0
        if (this.state.previewIndex === 0) {
            index = this.state.totalImageCount
        } else {
            index = this.state.previewIndex
        }
        this.setState({
            previewIndex: (index - 1) % this.state.totalImageCount
        })
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
                    preview={this.loadPreview.bind(this)}
                    url={image.url}
                    key={image.id}
                    index={image.id}
                />
            )
        })
        return (
            <div>
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
                {this.state.preview && (
                    <div>
                        <button className="images__navigation-container" onClick={this.nextPreview.bind(this)}>
                            <svg className="images__navigation images__navigation--right">
                                <path d="M29.873,9.745 C29.910,9.836 29.929,9.934 29.929,10.032 C29.929,10.034 29.930,10.035 29.930,10.037 C29.930,10.039 29.929,10.041 29.929,10.043 C29.929,10.141 29.910,10.238 29.873,10.330 C29.835,10.424 29.780,10.509 29.710,10.580 L20.731,19.780 C20.585,19.930 20.393,20.005 20.202,20.005 C20.011,20.005 19.819,19.930 19.673,19.780 C19.381,19.481 19.381,18.995 19.673,18.696 L27.376,10.804 L0.745,10.804 C0.331,10.804 -0.003,10.461 -0.003,10.037 C-0.003,9.613 0.331,9.270 0.745,9.270 L27.376,9.270 L19.673,1.378 C19.381,1.079 19.381,0.594 19.673,0.294 C19.965,-0.005 20.439,-0.005 20.731,0.294 L29.710,9.494 C29.780,9.565 29.835,9.650 29.873,9.745 Z" />
                            </svg>
                        </button>
                        <button className="images__navigation-container" onClick={this.previousPreview.bind(this)}>
                            <svg className="images__navigation images__navigation--left">
                                <path d="M29.255,10.804 L2.624,10.804 L10.327,18.696 C10.619,18.995 10.619,19.481 10.327,19.780 C10.181,19.930 9.989,20.005 9.798,20.005 C9.607,20.005 9.415,19.930 9.269,19.780 L0.290,10.580 C0.220,10.509 0.165,10.424 0.127,10.330 C0.090,10.238 0.071,10.141 0.071,10.043 C0.071,10.041 0.070,10.039 0.070,10.037 C0.070,10.035 0.071,10.034 0.071,10.032 C0.071,9.934 0.090,9.836 0.127,9.745 C0.165,9.650 0.220,9.565 0.290,9.494 L9.269,0.294 C9.561,-0.005 10.035,-0.005 10.327,0.294 C10.619,0.594 10.619,1.079 10.327,1.378 L2.624,9.270 L29.255,9.270 C29.669,9.270 30.003,9.613 30.003,10.037 C30.003,10.461 29.669,10.804 29.255,10.804 Z" />
                            </svg>
                        </button>
                        <div
                        className="images--preview"
                        onClick={this.UnloadPreview.bind(this)}
                    >
                        
                        {images[this.state.previewIndex]}
                        
                    </div>
                    </div>
                    
                )}
            </div>
        )
    }
}

export default Images
