import React from "react";
import PropTypes from "prop-types";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink } from 'reactstrap';

export class MenuBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen : false
        };
    
        this.toggle = this.toggle.bind(this);
        this.handleResetButtonClick = this.handleResetButtonClick.bind(this);
    }

    handleResetButtonClick(e) {

    }

    toggle() {
        this.setState({ isOpen: true })
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>Hangman</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink 
                                href="#"
                                onClick={this.props.handleResetButtonClick}
                            >
                                New Game
                            </NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

React.propTypes = {
    handleResetButtonClick : PropTypes.func.isRequired
};