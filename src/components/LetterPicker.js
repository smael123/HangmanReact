import React from 'react'
import PropTypes from "prop-types"

export class LetterPicker extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
            desiredLetter : ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDesiredLetterChange = this.handleDesiredLetterChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onSubmit(this.state.desiredLetter)

        this.setState({ desiredLetter : "" }); //validation error shown afterwards
    };

    handleDesiredLetterChange(e) {
        const desiredLetter = e.target.value.toUpperCase();
        
        this.setState({ desiredLetter : desiredLetter });

        e.target.value = this.state.desiredLetter; //return capitalized letter
    }

    render() {
        return (
            <div className="letter-picker">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input 
                            className="form-control"
                            id="desired-letter"
                            type="text"
                            required
                            maxLength="1"
                            value={this.state.desiredLetter}
                            onChange={this.handleDesiredLetterChange}
                        />
                    </div>
                    <button className="btn btn-primary btn-lg" type="submit">Try</button>
                </form>
            </div>
        )
    }
}

LetterPicker.propTypes = {
    onSubmit : PropTypes.func.isRequired
}