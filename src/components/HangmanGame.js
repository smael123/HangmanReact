import React from 'react';
import PropTypes from 'prop-types';
import { TryCounter } from './TryCounter';
import { LetterBlock } from './LetterBlock';
import { LetterPicker } from './LetterPicker';
import { LetterBlockContainer } from './LetterBlockContainer';

export class HangmanGame extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gameOver : false,
            revealedWord : "_".repeat(this.props.word.length)
        }

        this.revealLetter = this.revealLetter.bind(this);
    }

    revealLetter(letter) {
        let updatedWordIndeces = [];
        
        [...this.props.word.toUpperCase()].forEach((val, index) => 
        { 
            if (val === letter || val.toLowerCase() === letter) {
                updatedWordIndeces.push(index)
            }
        });

        let revealedWordArr = [...this.state.revealedWord];

        updatedWordIndeces.forEach((val) => revealedWordArr[val] = this.props.word.charAt(val).toUpperCase());

        this.setState({ revealedWord : revealedWordArr.join('') });
    }

    render() {
        return (
            <div>
                <TryCounter numberOfTries={5} />
                <LetterBlockContainer word={this.state.revealedWord} />
                <LetterPicker onSubmit={this.revealLetter} />
            </div>
            
        )
    }
}

HangmanGame.propTypes = {
    word : PropTypes.string.isRequired
};