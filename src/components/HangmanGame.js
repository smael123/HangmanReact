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
            gameOver : false, //could also just count no of tries left but underflow
            revealedWord : "_".repeat(this.props.word.length),
            numberOfTriesLeft : 5,
            victory : false
        }

        this.revealLetter = this.revealLetter.bind(this);
    }

    revealLetter(letter) {
        if (this.state.gameOver) {
            return;
        }

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

            const combinedRevealedWordArr = revealedWordArr.join('');
            console.log(combinedRevealedWordArr);
            const entireWordRevealed = (combinedRevealedWordArr === this.props.word);

            this.setState({ 
                revealedWord : combinedRevealedWordArr,
                gameOver : entireWordRevealed,
                victory: entireWordRevealed
            });

            // if (this.state.revealedWord === this.props.word) {
            //     this.setState({gameOver : true, victory : true});
            // }
        }
        else {
            const newNumber = this.state.numberOfTriesLeft - 1;

            this.setState({ 
                numberOfTriesLeft : newNumber,
                gameOver : newNumber < 1,
                //victory: this.state.revealedWord === this.props.word
            });

            // if (this.state.numberOfTriesLeft == 0) {
            //     this.setState({gameOver : true});
            // }
        }

        // const newNumber = this.state.numberOfTriesLeft - 1;

        // this.setState({ 
        //     numberOfTriesLeft : newNumber,
        //     gameOver : newNumber < 1,
        //     victory: this.state.revealedWord == this.props.word
        // });
    }

    render() {
        return (
            <div>
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

HangmanGame.propTypes = {
    word : PropTypes.string.isRequired
};