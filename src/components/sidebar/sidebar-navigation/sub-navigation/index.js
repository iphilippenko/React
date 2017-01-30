import React, {Component} from 'react';
import {render} from 'react-dom';
import './sub-navigation.css';

export class SubNavigation extends Component {
    render() {
        return (
            <ul className="sub-menu">
                <li className="sub-menu__item is-completed"><a href="#" className="sub-menu__link">Basic Info</a></li>
                <li className="sub-menu__item is-active"><a href="#" className="sub-menu__link">Offices</a></li>
                <li className="sub-menu__item is-visited"><a href="#" className="sub-menu__link">Competitors</a></li>
            </ul>
        );
    };
}
