// @flow
import React from 'react';
import {render} from 'react-dom';
import {App} from './app';
import 'reset.css';
import './style.css';

render(
    <App/>,
    document.getElementById('root')
);