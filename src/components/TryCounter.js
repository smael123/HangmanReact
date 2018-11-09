import React from 'react';
import PropTypes from 'prop-types';

//init no of tries should be in game...

export class TryCounter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            numberOfTriesLeft : this.props.numberOfTries
        }
    }

    render() {
        return (
            <p>{this.state.numberOfTriesLeft} of tries left.</p>
        )
    }
}

TryCounter.propTypes = {
    numberOfTries : PropTypes.number.isRequired
};