import React, {Component} from 'react';
import {render} from 'react-dom';
import './edit-office.css';
import {Button} from 'react-bootstrap';
import '../../../buttons/cancel-button/cancel-button.css';
import {SecondaryButton} from '../../../buttons/secondary-button';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';

export class EditOffice extends Component {
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
             <div className="office-view office-edit">
                <form>
                    <div className="office-address__edit">
                        <FormGroup controlId="country">
                            <ControlLabel>*Country: </ControlLabel>
                            <input list="countries" className="form-control"/>
                            <datalist id="countries">
                                <option value="United Arab Emirates" className="select-option">United Arab Emirates</option>
                                <option value="United Kingdom" className="select-option">United Kingdom</option>
                                <option value="United States" className="select-option">United States</option>
                            </datalist>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>*State/Province: </ControlLabel>
                            <FormControl type="text" placeholder="state"/>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>*Postal Code: </ControlLabel>
                            <FormControl type="text" placeholder="postal code"/>
                        </FormGroup>

                        <FormGroup controlId="city">
                            <ControlLabel>*City: </ControlLabel>
                            <input list="cities" className="form-control"/>
                            <datalist id="cities">
                                <option value="Dubai" className="select-option">Dubai</option>
                                <option value="Abu Dhabi" className="select-option">Abu Dhabi</option>
                                <option value="Sharjah" className="select-option">Sharjah</option>
                            </datalist>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>*Street Address: </ControlLabel>
                            <FormControl type="text" placeholder="street"/>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Address 2: </ControlLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                    </div>

                    <div className="office-contacts office-contacts__edit">
                        <FormGroup>
                            <ControlLabel>Phone: </ControlLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Fax: </ControlLabel>
                            <FormControl type="text"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email: </ControlLabel>
                            <FormControl type="text"/>
                        </FormGroup>

                        <FormGroup>
                            <ControlLabel>Office Type:</ControlLabel>
                            <p className="primary-hq__checkbox"><img src="./src/images/check-box.svg" className="check-box"/>Primary HQ</p>
                        </FormGroup>
                    </div>

                    <div className="office-control">
                        <Button className="button__cancel" onClick={this.close}>Cancel</Button>
                        <SecondaryButton title="Save"/>
                    </div>
                </form>

             </div>

        )
    }
}