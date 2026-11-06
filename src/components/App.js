import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            renderBall: false,
            posi: 0,
            ballPosition: { left: "0px" }
        };

        this.renderChoice = this.renderBallOrButton.bind(this);
        this.buttonClickHandler = this.buttonClickHandler.bind(this);
    }

    buttonClickHandler() {
        this.setState({
            renderBall: true
        });
    }

    renderBallOrButton() {
        if (this.state.renderBall) {
            return (
                <div
                    className="ball"
                    style={this.state.ballPosition}
                ></div>
            );
        } else {
            return (
                <button
                    className="start"
                    onClick={this.buttonClickHandler}
                >
                    Start
                </button>
            );
        }
    }

    componentDidMount() {
        document.addEventListener("keydown", (event) => {
            if (event.keyCode === 39 && this.state.renderBall) {
                this.setState((prevState) => ({
                    posi: prevState.posi + 5,
                    ballPosition: {
                        left: `${prevState.posi + 5}px`
                    }
                }));
            }
        });
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        );
    }
}

export default App;
