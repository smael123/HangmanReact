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
//posibly container
    render() {
        return (
            <span>
                {(!this.state.hidden) ? this.props.letter : "_"}
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
