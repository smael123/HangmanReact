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
            gameOver : false
        }
    }

    render() {
        // let letterBlocks = [];

        // [...this.props.word].forEach((val, index) => {
        //     letterBlocks.push(<LetterBlock />)
        // })

        // [...this.props.word].forEach((val, index) => {
        //     letterBlocks.push(<LetterBlock />)
        // })

        // let i = 0;

        // for (var char in  this.props.word)

        const items = [...this.props.word].map((val, index) => <LetterBlock key={index} letter={val} />);

        return (
            <div>
                <TryCounter numberOfTries={5} />
                <LetterBlockContainer word="hello" />
                <LetterPicker />
            </div>
        )
    }
}

HangmanGame.propTypes = {
    word : PropTypes.string.isRequired
};