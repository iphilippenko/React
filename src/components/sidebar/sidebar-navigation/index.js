import React, {Component} from 'react';
import {render} from 'react-dom';
import {MainNavigation} from './main-navigation'

export class SidebarNavigation extends Component {
    render() {
        return (
            <nav className="menu">
                <MainNavigation/>
            </nav>
        );
    };
}
