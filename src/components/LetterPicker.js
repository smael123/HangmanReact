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
        //alert(this.state.desiredLetter);

        this.props.onSubmit(this.state.desiredLetter)

        //clear input after submission
        this.setState({ desiredLetter : "" }); //validation error shown afterwards
        
        // const form = document.querySelector(".letter-picker form");
        // form.reset()
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