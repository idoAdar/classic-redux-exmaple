import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAll } from './store/usersAction';
import './App.css';

const App = props => {
  useEffect(() => {
    props.getAllUsers();
  }, []);

  return (
    <div className="App">
      <h1>test</h1>
      {props.users.map(user => {
        return (
            <h1>{user.first_name}</h1>
          )
      })}
    </div>
  );
}

// Redux State:
const mapStateToProps = state => {
  return {
    users: state.usersReducer.users,
  }
}

// Dispatch Functions:
const mapDispatchToProps = dispatch => {
  return {
    getAllUsers: () => dispatch(getAll())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);