import React, { Component } from 'react';
import "./skills.css";


class Skills extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="skills-wapper" id="skills">
                <div class="main">
                    <div class="skill">
                        <img src="https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-512.png" />
                        <h4>Javascript</h4>
                        <p>1 years experience</p>
                        <p>Advanced Level</p>
                    </div>
                    <div class="skill">
                        <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" />
                        <h4>Reactjs</h4>
                        <p>1 year experience</p>
                        <p>Advanced Level</p>
                    </div>
                    <div class="skill">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png" />
                        <h4>html5</h4>
                        <p>1/5 year experience</p>
                        <p>Intermediate Level</p>
                    </div>
                    <div class="skill">
                        <img src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png" />
                        <h4>Css3</h4>
                        <p>1/5 years experience</p>
                        <p>Advanced Level</p>
                    </div>
                    <div class="skill">
                        <img src="https://www.chartjs.org/img/chartjs-logo.svg" />
                        <h4>chartjs</h4>
                        <p>6 months</p>
                        <p>Advanced Level</p>
                    </div>
                </div>
            </div>

        )
    }
}

export default Skills;
