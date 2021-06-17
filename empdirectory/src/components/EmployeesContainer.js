import React, { Component } from 'react';
import Col from './Col';
import Header from './Header';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import API from '../utils/API';

class EmployeesContainer extends Component {
    state = {

    };

    componentDidMount() {
        this.getEmployees();
    }

return (
    // <Header />
    )

}

export default EmployeesContainer;