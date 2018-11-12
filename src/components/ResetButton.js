import React from 'react';
import PropTypes from 'prop-types';

export class ResetButton extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(e) {
        e.preventDefault();

        this.props.onClick();
    }

    render() {
        return (
            <div>
                <button 
                    className="btn btn-secondary"
                    onClick={this.props.onClick}
                >
                    New Game
                </button>
            </div>
        )
    }
}

ResetButton.propTypes = {
    onClick : PropTypes.func.isRequired
}