import React from 'react'

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
        alert(this.state.desiredLetter);
    };

    handleDesiredLetterChange(e) {
        const desiredLetter = e.target.value;
        
        this.setState({ desiredLetter : desiredLetter });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        id="desired-letter"
                        type="text"
                        required
                        maxLength="1"
                        value={this.state.desiredLetter}
                        onChange={this.handleDesiredLetterChange}
                    />
                    <button type="submit">Try</button>
                </form>
            </div>
        )
    }
}