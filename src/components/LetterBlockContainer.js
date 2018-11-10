import React from 'react';
import PropTypes from 'prop-types';

import { LetterBlock } from './LetterBlock'

const styles = {
    textDecoration : "underline"
};

export class LetterBlockContainer extends React.Component {
    constructor(props) {
        super(props);

        // this.state = { 
        //     revealedWord : "_".repeat(this.props.word.length())
        // };
    }

    // revealLetter(letter) {
    //     let updatedWord = [];

    //     [...this.props.word].map((val, index, updatedWord)  => {
    //         (val === letter) ?  val : "_";
    //     })

    //     this.setState({ revealedWord : updatedWord.join() });
    // }

    render() {
        return (
            <div className="letter-block-container row">
                {[...this.props.word].map((val) => <span className="letter-block col">{val}</span>)}
            </div>
        )
    }
}
LetterBlockContainer.propTypes = {
    word : PropTypes.string.isRequired
};