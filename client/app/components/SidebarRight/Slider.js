import React from 'react';

import '../../scss/slider.scss';

export default class Slider extends React.Component {
    static defaultProps = {};

    state = {
        currentValue: 0,
        step: 1,
        max: 10,
        min: 1
    };

    constructor(props) {
        super(props);

        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e) {
        e.preventDefault();
        console.log(e.target.value);
    }

    render() {
        return (
            <div className="slider-container">
            </div>
        );
    }
}