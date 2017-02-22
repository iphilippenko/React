//@flow
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';
import './primary-button.css';

type Props = {
    title: string
}

export class PrimaryButton extends Component {
    props: Props;

    render() {
        return (
            <Button className="button__primary">{this.props.title}</Button>
        )
    }
}
