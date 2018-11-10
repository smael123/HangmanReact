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
            <div className="letter-block-container row">
                {[...this.props.word].map((val) => <span className="letter-block col">{val}</span>)}
            </div>
        )
    }
}
LetterBlockContainer.propTypes = {
    word : PropTypes.string.isRequired
};