import React, { Component } from "react"
import LazyLoad from "react-lazyload"
import "./style.scss"

class Images extends Component {
    constructor() {
        super()
        this.state = {
            loaded: false
        }
    }

    componentDidMount() {
        this.setState({
            loaded: true
        })
    }

    render() {
        let classes = "image "
        if (this.state.loaded) {
            classes += "image--loaded"
        }
        return (
            <div className="image-container">
                <LazyLoad height={0} once key={this.props.image}>
                    <img className={classes} src={this.props.url} alt="..." />
                </LazyLoad>
            </div>
        )
    }
}

export default Images
