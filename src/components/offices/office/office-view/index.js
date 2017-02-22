//@flow

import React, {Component} from 'react';
import {render} from 'react-dom';
import './office-view.css';
import {Button} from 'react-bootstrap';
import {EditOffice} from '../edit-office';
import {DeleteOffice} from '../../delete-office';
import '../../../buttons/remove-button/remove-button.css';


type Props = {
    primaryHQ?: boolean,
    country: string,
    state: string,
    postalCode: string,
    city: string,
    street: string,
    phone: string,
    fax?: string,
    email?: string
}

export class OfficeView extends Component {
    props: Props;

    constructor(props) {
        super(props);
        this.openEdit = this.openEdit.bind(this);
        this.openDelete = this.openDelete.bind(this);
        this.state = {showEdit: false, showDelete: false};
    }

    getPhone() {
        if (this.props.phone) {
            return <p className="office-phone__label">Phone: <span className="office-phone">{this.props.phone}</span></p>;
        }
        return null;
    }

    getEmail() {
        if (this.props.email) {
            return <p className="office-email__label">Email: <span className="office-email">{this.props.email}</span></p>;
        }
        return null;
    }

    getFax() {
        if (this.props.fax) {
            return <p className="office-fax__label">Fax: <span className="office-fax">{this.props.fax}</span></p>
        }
        return null;
    }

    getPrimary() {
        if (this.props.primaryHQ) {
            return <span className="primary-hq"><img src="./src/components/offices/office/office-view/check-mark.svg" className="check-mark check-mark__primary"/>Primary HQ<br/></span>
        }

        return null;
    }

    openEdit() {
        this.setState({showEdit: true});
    }

    openDelete() {
        this.setState({showDelete: true});
    }


    render() {
        return (
            <div>
                {
                    this.state.showEdit ? <EditOffice/> : null
                }

                {
                    this.state.showDelete ? <DeleteOffice/> : null
                }

                <div className="office-view">
                    <div className="office-address">
                        <p className="office-address__label">Address:</p>
                        <p className="office-address__info">{this.getPrimary()} {this.props.street} <br/> {this.props.city},<br/>
                            {this.props.state} {this.props.postalCode} <br/> {this.props.country}</p>
                    </div>

                    <div className="office-contacts">
                        {this.getPhone()}
                        {this.getFax()}
                        {this.getEmail()}
                    </div>

                    <div className="office-control">
                        <Button className="button__remove" onClick={this.openDelete}>Remove</Button>
                        <Button className="button__secondary" onClick={this.openEdit}>Edit</Button>
                    </div>
                </div>
            </div>
        )
    }
}

