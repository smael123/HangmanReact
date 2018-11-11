import React from 'react';
import PropTypes from 'prop-types';

//init no of tries should be in game...

export class TryCounter extends React.Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     numberOfTriesLeft : this.props.numberOfTries
        // }
    }

    render() {
        let message;

        if (!this.props.victory && !this.props.gameOver) {
            message = this.props.numberOfTries + " tries left";
        }
        else if (!this.props.victory && this.props.gameOver) {
            message = "GAME OVER!";
        }
        else {
            message = "YOU WIN!";
        }

        return (
            <div className="try-counter">
                 <span>{message}</span>
            </div>
        )
    }
}

TryCounter.propTypes = {
    numberOfTries : PropTypes.number.isRequired,
    gameOver : PropTypes.bool.isRequired,
    victory: PropTypes.bool.isRequired
};