import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style/errorpage.scss';
class ErrorPage extends Component {
  render() {
    return (
      <div className='error-message'>
        <p>Page not found</p>
        <Link to='/all'>Go back</Link>
      </div>
    );
  }
}

export default ErrorPage;
