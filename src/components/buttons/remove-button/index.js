import React, {Component} from 'react';
import {render} from 'react-dom';
import {Button} from 'react-bootstrap';
import './remove-button.css';

type Props = {
    title: string
}

export class RemoveButton extends Component {
    props: Props;

    render() {
        return (
            <Button className="button__remove">{this.props.title}</Button>
        )
    }
}

