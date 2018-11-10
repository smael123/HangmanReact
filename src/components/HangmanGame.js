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
            revealedWord : "_".repeat(this.props.word.length),
            numberOfTriesLeft : 5
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

        if (updatedWordIndeces.length > 0) {
            let revealedWordArr = [...this.state.revealedWord];

            updatedWordIndeces.forEach((val) => revealedWordArr[val] = this.props.word.charAt(val).toUpperCase());

            this.setState({ 
                revealedWord : revealedWordArr.join(''),
            });
        }
        else {
            this.setState({ 
                numberOfTriesLeft : this.state.numberOfTriesLeft - 1
            });
        }
    }

    render() {
        return (
            <div>
                <TryCounter numberOfTries={this.state.numberOfTriesLeft} />
                <LetterBlockContainer word={this.state.revealedWord} />
                <LetterPicker onSubmit={this.revealLetter} />
            </div>
            
        )
    }
}

HangmanGame.propTypes = {
    word : PropTypes.string.isRequired
};