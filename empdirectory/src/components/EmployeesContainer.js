import React, { Component } from 'react';
import Col from './Col';
import Header from './Header';
import SearchForm from './SearchForm';
import SearchResults from './SearchResults';
import API from '../utils/API';

class EmployeesContainer extends Component {
    state = {
        result: {},
        search: ''
    };

    componentDidMount() {
        this.getEmployees();
    }

    getEmployees = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

    

return (
    // <Header />
    )

}

export default EmployeesContainer;