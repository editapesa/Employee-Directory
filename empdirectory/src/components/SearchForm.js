import React from 'react';
import '../styles/SearchForm.css';

function SearchForm(props) {
    return (
        <div className="form-group"> 
            <form className='form-inline'> 
                <input 
                    onChange={props.handleInputChange}
                    type='search'
                    className="form-control"                   
                    placeholder="Search"
                    id='search'
                /> 
            </form>
        </div>       
    );
}

export default SearchForm;