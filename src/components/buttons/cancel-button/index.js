//@flow
import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';
import './cancel-button.css';

type Props = {
    title: string
}

export class CancelButton extends Component {
    props: Props;

    render() {
        return (
            <Button className="button__cancel">{this.props.title}</Button>
        )
    }
}
