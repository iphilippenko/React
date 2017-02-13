// @flow
import React, {Component} from 'react';
import {render} from 'react-dom';
import {AboutContent} from '../../../src/components/about-content';
import 'reset.css';
import './offices.css';
import {OfficeView} from './office/office-view';
import {PrimaryButton} from '../buttons/primary-button';
import {SecondaryButton} from '../buttons/secondary-button';

export class Offices extends Component {


    render() {
        return (
            <div className="offices-content">
                <AboutContent/>

                <div className="offices-info">
                    <PrimaryButton title="Add new Office"/>

                    <p className="offices__amount">3 Offices</p>


                    <OfficeView primaryHQ="true" country="United States" state="Washington" postalCode="98052" city="Redmond" street="One Microsoft Way"
                                phone="+1 (425) 882-8080" email="msft@microsoft.com"/>
                    <OfficeView country="United Kingdom" state="England RG6" postalCode="1WG" city="Berkshire"
                                street="Thames Valley Park Reading"
                                phone="+44 (0)34 4800 2400" fax="+44 (0)87 0602 0100"/>
                    <OfficeView country="Australia" state="New South Wales " postalCode="1670" city="North Ryde Sydney" street="PO Box 91"
                                phone="+61 (0)2 9870 2200"/>
                </div>

                <div className="control">
                    <PrimaryButton title="Back"/>

                    <a href="#" className="provide-comments"><img src="./src/images/plus.png" className="provide-comments__plus"/>Provide additional comments</a>

                    <PrimaryButton title="Skip this step"/>

                    <SecondaryButton title="Continue"/>
                </div>

            </div>

        )
    }
}

