// @flow
import React from 'react';
import {render} from 'react-dom';
import {Header} from '../src/components/header';
import {Sidebar} from '../src/components/sidebar';
import 'reset.css';
render(
    <div>
        <Header/>
        <Sidebar/>
    </div>,
    document.getElementById('root')
);