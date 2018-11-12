import React from 'react';
import PropTypes from 'prop-types';
import { TryCounter } from './TryCounter';
import { LetterBlock } from './LetterBlock';
import { LetterPicker } from './LetterPicker';
import { LetterBlockContainer } from './LetterBlockContainer';
import { ResetButton } from './ResetButton';
//import { words } from "random-words";

export class HangmanGame extends React.Component {
    constructor(props) {
        super(props);

        const randomWords = require('random-words');

        const randomWordChosen = randomWords().toUpperCase();

        this.state = {
            word : randomWordChosen,
            gameOver : false, //could also just count no of tries left but underflow
            revealedWord : "_".repeat(randomWordChosen.length),
            numberOfTriesLeft : 5,
            victory : false
        }

        this.revealLetter = this.revealLetter.bind(this);
        this.intializeGame = this.intializeGame.bind(this);
    }

    intializeGame() {
        const randomWords = require('random-words');

        const randomWordChosen = randomWords().toUpperCase();

        //cannot call this.state!
        this.setState ({
            word : randomWordChosen,
            gameOver : false, //could also just count no of tries left but underflow
            revealedWord : "_".repeat(randomWordChosen.length),
            numberOfTriesLeft : 5,
            victory : false
        })
    }

    revealLetter(letter) {
        if (this.state.gameOver) {
            return;
        }

        let updatedWordIndeces = [];
        
        [...this.state.word.toUpperCase()].forEach((val, index) => 
        { 
            if (val === letter || val.toLowerCase() === letter) {
                updatedWordIndeces.push(index)
            }
        });

        if (updatedWordIndeces.length > 0) {
            let revealedWordArr = [...this.state.revealedWord];

            updatedWordIndeces.forEach((val) => revealedWordArr[val] = this.state.word.charAt(val).toUpperCase());

            const combinedRevealedWordArr = revealedWordArr.join('');
            console.log(combinedRevealedWordArr);
            const entireWordRevealed = (combinedRevealedWordArr === this.state.word);

            this.setState({ 
                revealedWord : combinedRevealedWordArr,
                gameOver : entireWordRevealed,
                victory: entireWordRevealed
            });
        }
        else {
            const newNumber = this.state.numberOfTriesLeft - 1;

            this.setState({
                revealedWord: (newNumber < 1) ? this.state.word : this.state.revealedWord,
                numberOfTriesLeft : newNumber,
                gameOver : newNumber < 1,
            });
        }
    }

    render() {
        return (
            <div>
                <ResetButton onClick={this.intializeGame} />
                <TryCounter 
                    numberOfTries={this.state.numberOfTriesLeft} 
                    gameOver={this.state.gameOver} 
                    victory={this.state.victory} 
                />
                <LetterBlockContainer word={this.state.revealedWord} />
                <LetterPicker onSubmit={this.revealLetter} />
            </div>
            
        )
    }
}