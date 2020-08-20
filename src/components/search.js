import React from 'react';
import '../styling/search.css'

class SearchItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        this.setState({value: ''})
        this.answerFunction()
    }

    answerFunction = () => {
        this.props.call(this.state.value)
    }
    
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input id='input' value={this.state.value} type='text' onChange={this.handleChange}></input>
                    <input type='submit'></input>
                    <button onClick={this.handleSubmit}>Reload</button> {/*uses the same event handler as submit but whatever */}
                </form>
            </div>
        )
    }
}

export default SearchItem;