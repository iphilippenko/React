import React, {Component} from 'react';
import {render} from 'react-dom';
import {Modal, FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import './delete-office.css';
import {SecondaryButton} from '../../buttons/secondary-button';
import {Button} from 'react-bootstrap';

export class DeleteOffice extends Component {
    constructor(props) {
        super(props);
        this.close = this.close.bind(this);
        this.state = {show: true};
    }

    close() {
        this.setState({show: false});
    }

    render() {
        return (
            <div className="popup">
                <div className="static-modal popup-content">
                    <Modal.Dialog>
                        <Modal.Header>
                            <Modal.Title>Please tell us why you’re removing this record.</Modal.Title>
                        </Modal.Header>

                        <Modal.Body>
                            <form>
                                <FormGroup className="removed-why">
                                    <input list="removed__select" className="form-control removed-why__select"/>
                                    <datalist id="removed__select">
                                        <option value="Former Record" className="select-option">Former Record</option>
                                        <option value="Duplicate Record" className="select-option">Duplicate Record</option>
                                        <option value="Record never Existed" className="select-option">Record never Existed</option>
                                        <option value="Other">Other</option>
                                    </datalist>
                                </FormGroup>

                                <FormGroup className="removed-why">
                                    <ControlLabel className="removed-why__notes_label">Notes:</ControlLabel>
                                    <FormControl componentClass="textarea" className="removed-why__notes"/>
                                </FormGroup>
                            </form>
                        </Modal.Body>

                        <Modal.Footer>
                            <Button className="button__cancel" onClick={this.close}>Cancel</Button>
                            <SecondaryButton title="Remove Record" className="remove"/>
                        </Modal.Footer>
                    </Modal.Dialog>
                </div>
            </div>
        )
    };
}
