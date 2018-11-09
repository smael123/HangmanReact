import React from 'react';
import PropTypes from 'prop-types';

import { LetterBlock } from './LetterBlock'

const styles = {
    textDecoration : "underline"
};

export class LetterBlockContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {[...this.props.word].map((val, index) => <LetterBlock key={index} letter={val} />)}
            </div>
        )
    }
}
LetterBlockContainer.propTypes = {
    word : PropTypes.string.isRequired
};