import React, { Component } from "react"
import { Helmet } from "react-helmet"
import "./style.scss"

class Shop extends Component {
    render() {
        return (
            <div className="container container--shop">
                <Helmet>
                    <title>shop &ndash; bysimeon</title>
                </Helmet>
                <div className="mediumtext">
                    <span className="uppercase">for sale</span>
                </div>
                <section className="item left-pic" id="item1">
                    <div className="image">
                        <img
                            draggable="false"
                            className="img-hor lazy"
                            data-src="/assets/photos/shop/item1/item1.svg"
                            alt=""
                        />
                    </div>
                    <div className="description">
                        <h1>shirts with pictures</h1>
                        <p>
                            {" "}
                            shirts with pictures i take on em, color
                            coordinated! shirts with pictures i take on em,
                            color coordinated!
                        </p>
                        <ul>
                            <li> soft cotton</li>
                            <li> looks good dirty</li>
                            <li> pre-shrunk</li>
                        </ul>
                        <div className="not-a-button">shirt size</div>
                        <div className="horizontal-buttons">
                            <button>s</button>
                            <button>m</button>
                            <button>l</button>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default Shop
