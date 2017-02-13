import React, {Component} from 'react';
import {render} from 'react-dom';
import {Title} from '../title';
import {ContentDescription} from '../content-description';
import './about-content.css';

export class AboutContent extends Component {
    render() {
        return (
            <div className="content-about">
                <Title/>
                <ContentDescription/>
            </div>
        )
    }
}