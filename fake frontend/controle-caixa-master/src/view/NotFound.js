import React, { Component } from "react";
import ReactDOM from "react-dom";

class NotFound extends Component {
    componentDidMount() {
        const dom = ReactDOM.findDOMNode(this);
        
        dom.style.transition = "all 0.5s";
        dom.style.opacity = 0;

        setTimeout(() => dom.style.opacity = 1);
    }

    render() {
        return <span>Não achei :'(</span>;
    }
}

export default NotFound;