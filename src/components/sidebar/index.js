

import React, {Component} from 'react';
import {render} from 'react-dom';
import {SidebarNavigation} from './sidebar-navigation';
import {ProgressBar} from './progress-bar';
import './sidebar.css';

export class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <ProgressBar/>
                <SidebarNavigation/>
            </aside>
        )
    }
}
