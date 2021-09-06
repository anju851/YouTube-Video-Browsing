import React from 'react';

class SearchBar extends React.Component {

    state = { term: ''};

    onInputChange= (event) => {
       this.setState({ term: event.target.value });
    };

    // the below function is a callback function that needs to be passed to the child element
    onFormSubmit = event =>{
        event.preventDefault();

        //make sure to callback from parent component
        this.props.onFormSubmit(this.state.term);
    }

    render() {
        return (<div className="search-bar ui segment"> 
                  <form className="ui form" onSubmit={this.onFormSubmit} >
                      <div className="field">
                          <label>Video search</label>
                          <input type="text" value={this.state.term} 
                              onChange={this.onInputChange}/>
                      </div>
                  </form>
             </div>
        );
    }
}

export default SearchBar;
// if we give a defsult value to the input text field and the input tag is not associated with any event handler
// then the user is not allowed to write anything n the input field and a warning message is displayed in the console