import React, {Component} from 'react';
import {render} from 'react-dom';
import {ContentTitle} from './content-title';
import {ContentSubtitle} from './content-subtitle';
import './title.css';

export class Title extends Component {
    render() {
        return (
            <div className="title">
                <ContentTitle/>
                <ContentSubtitle/>
            </div>
        )
    }
}