import React, { Component } from "react"
import "./style.scss"

class Toggle extends Component {
    constructor() {
        super()
        this.state = {
            popup: false
        }
    }

    togglePopUp() {
        if (this.state.popup) {
            this.setState({
                popup: false
            })
        } else {
            this.setState({
                popup: true
            })
        }
    }

    render() {
        return (
            <div>
                <svg
                    className="logo"
                    width="600"
                    height="600"
                    viewBox="0 0 600 600"
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={this.togglePopUp.bind(this)}
                >
                    <g transform="translate(300,300)">
                        <path
                            d="M133.3,-213.4C167.1,-185.7,185,-139.2,202,-94.4C219,-49.7,235.2,-6.8,238.6,40.9C241.9,88.5,232.4,140.8,203.2,178C174,215.1,125,237.1,76.4,243.9C27.8,250.7,-20.5,242.4,-62,224.2C-103.5,206.1,-138.3,178,-166.6,144.7C-194.9,111.4,-216.7,72.9,-220.5,33C-224.2,-6.9,-209.9,-48.1,-194.6,-91.8C-179.2,-135.5,-162.9,-181.8,-130.3,-210C-97.7,-238.3,-48.8,-248.7,0.5,-249.4C49.7,-250.1,99.5,-241.1,133.3,-213.4Z"
                            fill={this.props.textColor}
                        />
                    </g>
                </svg>

                {this.state.popup && (
                    <div className="feed">
                        <div className="feed__title"> feed </div>
                        <div className="feed__items">
                            <li className="feed__items__item">
                                7.17 added a feed to site
                            </li>
                            <li className="feed__items__item">
                                7.15 added hire me banner
                            </li>
                            <li className="feed__items__item">
                                7.14 uploaded new color photo
                            </li>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default Toggle
