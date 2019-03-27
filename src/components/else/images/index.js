import React, { Component } from "react"
import "./style.scss"
import Image from "./image"

class Images extends Component {
    constructor() {
        super()
        this.state = {
            images: [],
            path: "",
            loadedImageCount: 0,
            preview: false,
            previewIndex: 0,
            totalImageCount: 0
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
        this.setState({
            path: this.props.path,
            totalImageCount: this.props.count
        },() => {
        this.createImages()
        })
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
                    <p className="description">
                        {this.state.loadedImageCount >= this.state.totalImageCount ? (
                            <span>{this.props.tag} pictures taken bysimeon</span>
                        ) : (
                            <span>loading {this.props.tag} pictures taken bysimeon</span>
                        )}
                    </p>
                    {images}
                </div>
                {this.state.preview && (
                    <div>
                        <button
                            className="images__navigation-container"
                            onClick={this.previousPreview.bind(this)}
                        >
                            <svg className="images__navigation images__navigation--left">
                                <path
                                    className="shape-outline outer-color"
                                    d="M8.0008001,17.2999992c-0.4000001,0.3999996-0.4000001,1,0,1.3999996l15.7991991,15.7992001								c0.3999996,0.4000015,1,0.4000015,1.3999996,0l2.6992016-2.6991997c0.3999996-0.3999996,0.3999996-1,0-1.3999996								L16.2992001,18.7000008c-0.4000006-0.3999996-0.4000006-1,0-1.3999996L27.8992004,5.6999998								c0.3999996-0.4000001,0.3999996-1,0-1.4000001l-2.6992016-2.6992002c-0.3999996-0.4-1-0.4-1.3999996,0L8.0008001,17.2999992z"
                                />
                                <path
                                    className="shape-shape inner-color"
                                    d="M9.6999998,17.6000004c-0.1999998,0.2000008-0.1999998,0.5,0,0.7000008l14.500001,14.5000019								c0.2000008,0.2000008,0.5,0.2000008,0.7000008,0l1.3999996-1.3999996c0.2000008-0.2000008,0.2000008-0.5,0-0.7000008								L13.8999996,18.3999996c-0.1999998-0.2000008-0.1999998-0.5,0-0.7000008L26.2999992,5.3000002								c0.2000008-0.1999998,0.2000008-0.5,0-0.6999998l-1.3999996-1.4000001c-0.2000008-0.2-0.5-0.2-0.7000008,0L9.6999998,17.6000004z"
                                />
                            </svg>
                        </button>
                        <button
                            className="images__navigation-container"
                            onClick={this.nextPreview.bind(this)}
                        >
                            <svg className="images__navigation images__navigation--right">
                                <path
                                    class="shape-outline outer-color"
                                    d="M8.0008001,17.2999992c-0.4000001,0.3999996-0.4000001,1,0,1.3999996l15.7991991,15.7992001								c0.3999996,0.4000015,1,0.4000015,1.3999996,0l2.6992016-2.6991997c0.3999996-0.3999996,0.3999996-1,0-1.3999996								L16.2992001,18.7000008c-0.4000006-0.3999996-0.4000006-1,0-1.3999996L27.8992004,5.6999998								c0.3999996-0.4000001,0.3999996-1,0-1.4000001l-2.6992016-2.6992002c-0.3999996-0.4-1-0.4-1.3999996,0L8.0008001,17.2999992z"
                                />
                                <path
                                    class="shape-shape inner-color"
                                    d="M9.6999998,17.6000004c-0.1999998,0.2000008-0.1999998,0.5,0,0.7000008l14.500001,14.5000019								c0.2000008,0.2000008,0.5,0.2000008,0.7000008,0l1.3999996-1.3999996c0.2000008-0.2000008,0.2000008-0.5,0-0.7000008								L13.8999996,18.3999996c-0.1999998-0.2000008-0.1999998-0.5,0-0.7000008L26.2999992,5.3000002								c0.2000008-0.1999998,0.2000008-0.5,0-0.6999998l-1.3999996-1.4000001c-0.2000008-0.2-0.5-0.2-0.7000008,0L9.6999998,17.6000004z"
                                />
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
