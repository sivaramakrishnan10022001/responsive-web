import React from "react";
import "./components.css";
import Header from "./header/header";
import Menu from "./menu/menu";
import Skills from "./skills/skills";
import Work from "./work/work";
import Contact from "./contact/contact";


class Components extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        return (
            <div className="components">
                <Menu />
                <Header />
                <Skills />
                <Work />
                <Contact />
            </div>
        )
    }
}

export default Components;