import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }
    //need this function to be able to type in search since we are setting the search
    //value equal to state which is an object essentially
    onChange = (e) => {
        //used to be text:, [e.target.name] makes it more flexible, gets the input from
        //name which is = to "text" in the input html below
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault()
        //alert for empty searches
        if(this.state.text === ''){
            this.props.setAlert('Please input a search', 'light')
        } else {
            //this is where we call a prop function from APP.js and pass in 
            //search bar text
            this.props.searchUsers(this.state.text)
            this.setState({ text: '' })
        }



        
    }

    render() {
        const { showClear, clearUsers } = this.props

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">

                    <input type="text" name="text" placeholder="Search Users..." 
                    value={this.state.text} onChange={this.onChange}/>

                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
                
            </div>
        )
    }
}

export default Search
