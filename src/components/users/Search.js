import React, { useState } from 'react'
import PropTypes from 'prop-types'


const Search = ( { searchUsers, showClear, clearUsers, setAlert} ) => {
    const [text, setText] = useState('')
    

    
    //need this function to be able to type in search since we are setting the search
    //value equal to state which is an object essentially
     const onChange = (e) => {
        //used to be text:, [e.target.name] makes it more flexible, gets the input from
        //name which is = to "text" in the input html below
        setText(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        //alert for empty searches
        if(text === ''){
            setAlert('Please input a search', 'light')
        } else {
            //this is where we call a prop function from APP.js and pass in 
            //search bar text
            searchUsers(text)
            setText('')
        }



        
    }
        

        return (
            <div>
                <form onSubmit={onSubmit} className="form">

                    <input type="text" name="text" placeholder="Search Users..." 
                    value={text} onChange={onChange}/>

                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block" onClick={clearUsers}>Clear</button> }
                
            </div>
        )
    
}

Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
}

export default Search
