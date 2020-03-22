import React, { Component } from 'react'
export default class SearchBar extends Component {
    state = {
        term : ''
    };

    onInputChange = (event) => {
        let target = event.target;
        let name = target.name;
        let value = target.value;
        this.setState({
            [name]: value
        })
    }
    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.onRetriveForm(this.state.term);
    }
    render() {
        const {term} = this.state;
        return (
            <div className="ui segment">
               <form 
               className="ui form"
               onSubmit={this.onFormSubmit}
                >
               <div className="field">
               <label>Image Search</label>
               <input 
               type="text"
               value={term}
               name="term"
            //    onChange={(e) => this.setState({term: e.target.value})}
                onChange = {this.onInputChange}

               />
               </div>
               </form>
            </div>
        )
    }
}
