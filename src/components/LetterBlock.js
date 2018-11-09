import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    textDecoration : "underline"
};

export class LetterBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hidden: false }; //maybe just send the letter
    }

    reveal() {
        this.setState({ hidden : true });
    }

    render() {
        return (
            <span>
                {(!this.state.hidden) ? this.props.letter : " "}
            </span>
        )
    }
}

LetterBlock.propTypes = {
    letter: PropTypes.string.isRequired
};

// constructor(props) {
//     super(props);

//     // this.state = { hidden: true }; //maybe just send the letter
// }
