import React from "react";
import "./header.css";
// import image from "../image/siva.jpg";
// import image from "../image/img1.JPG";


class Header extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="header-wapper">
                <div className="header-title">
                    <div className="content">
                        <h2>i'm sivaramakrishnan  </h2>
                        <h3>front end developer</h3>
                    </div>
                </div>
                <div className="profile">
                    <div className="header">
                        <div className="content">
                            {/* <img className="image" src={image} alt="profile" /> */}
                            <img className="image" src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}

export default Header;
