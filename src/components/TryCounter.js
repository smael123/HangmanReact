import React from 'react';
import PropTypes from 'prop-types';

//init no of tries should be in game...

export const TryCounter = (props) => {
    let message;

    if (!props.victory && !props.gameOver) {
        message = props.numberOfTries + " tries left";
    }
    else if (!props.victory && props.gameOver) {
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

TryCounter.propTypes = {
    numberOfTries : PropTypes.number.isRequired,
    gameOver : PropTypes.bool.isRequired,
    victory: PropTypes.bool.isRequired
};