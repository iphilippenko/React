// @flow

import React, {Component} from 'react';
import './progress.css';

type DefaultProps = {
    currentProgress: number,
    allProgress: number
};

export class ProgressBar extends Component {
    render() {
        return (
            <div className="progress-bar__container">
                <img src="./src/images/progress.svg" className="progress-bar__image"/>
            </div>
        );
    }
}
