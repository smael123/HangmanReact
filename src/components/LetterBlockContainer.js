import React from 'react';
import PropTypes from 'prop-types';

export const LetterBlockContainer = (props) => {
    return (
        <div className="letter-block-container row">
            {[...props.word].map((val) => <span className="letter-block col">{val}</span>)}
        </div>
    )
}
LetterBlockContainer.propTypes = {
    word : PropTypes.string.isRequired
};