import React , {Component} from 'react';
import {render} from 'react-dom';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import './header.css';

export class Header extends Component {
    render () {
        return (
            <Navbar  className="header">
                <Navbar.Header className="header__wrap">
                    <div className="brand">
                        <Navbar.Brand className="logo__wrap">
                            <a href="#"><img src="./src/images/s-p-d-u.svg" className="logo__image"/></a>
                        </Navbar.Brand>
                        <Nav className="menu__left">
                            <NavItem eventKey={1} href="#" className="menu__item">Profile Editor</NavItem>
                        </Nav>
                    </div>

                    <Nav className="menu__right">
                        <NavItem eventKey={2} href="#" className="menu__item">Contacts</NavItem>
                        <NavItem eventKey={3} href="#" className="menu__item">FAQs</NavItem>
                        <NavItem eventKey={4} href="#" className="menu__item">Save and Exit</NavItem>
                    </Nav>
                </Navbar.Header>
            </Navbar>
        );
    };
}