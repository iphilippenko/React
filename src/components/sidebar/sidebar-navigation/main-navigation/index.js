import React, {Component} from 'react';
import {render} from 'react-dom';
import {SubNavigation} from '../sub-navigation';
import './main-navigation.css';

export class MainNavigation  extends Component {
    render() {
        return (
            <ul className="main-menu">
                <li className="main-menu__item">
                    <a href="#" className="main-menu__link">
                        Company info
                    </a>
                    <SubNavigation/>
                </li>
                <li className="main-menu__item"><a href="#" className="main-menu__link">My firm</a></li>
                <li className="main-menu__item"><a href="#" className="main-menu__link">Deals</a></li>
                <li className="main-menu__item"><a href="#" className="main-menu__link">Financials</a></li>
            </ul>
        );
    };
}