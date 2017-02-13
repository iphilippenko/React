// @flow
import React, {Component} from 'react';
import {render} from 'react-dom';
import {HeaderNav} from '../../src/components/header';
import {Sidebar} from '../../src/components/sidebar';
import {Offices} from '../components/offices';
import 'reset.css';
import './app.css';
import {DeleteOffice} from '../components/offices/delete-office';

export class App extends Component {
    render() {
       return (
            <div>
                <HeaderNav/>
                <div className="content">
                    <Sidebar/>

                    <Offices/>
                </div>
            </div>
        )
    }
}

