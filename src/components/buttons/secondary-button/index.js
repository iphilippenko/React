//@flow

import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';
import './secondary-button.css';

type Props = {
    title: string
}

export class SecondaryButton extends Component {
    props: Props;

    render() {
        return (
            <Button className="button__secondary">{this.props.title}</Button>
        )
    }
}
