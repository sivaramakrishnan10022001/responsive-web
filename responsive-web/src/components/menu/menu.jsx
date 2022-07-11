import React, { Component } from 'react';
import "./menu.css";

class Menu extends Component {
    render() {
        return (
            <div className="menu-wapper" id="home">
                <div className="logo">
                    sivaramakrishnan
                </div>
                <div className="icon">
                    <div className="login" >
                        login
                        <div className="popup">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
