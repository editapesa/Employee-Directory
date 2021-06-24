import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div className='header'>
                <h1>Employee Directory</h1>
                <p>Click on an arrow to filter by heading or use the search box to narrow your results.</p>
            </div>
        )
    }
}

export default Header;