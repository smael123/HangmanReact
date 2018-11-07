import React from 'react';
import PropTypes from 'prop-types';

const styles = {
    textDecoration : "underline"
};

export class LetterBlock extends React.Component {
    constructor(props) {
        super(props);

        this.state = { hidden: true }; //maybe just send the letter
    }

    render() {
        return (
            <span style={styles}>
                {(this.state.hidden) ? this.props.letter : " "}
            </span>
        )
    }
}

LetterBlock.PropTypes = {
    letter: PropTypes.string.isRequired
};

// constructor(props) {
//     super(props);

//     // this.state = { hidden: true }; //maybe just send the letter
// }
