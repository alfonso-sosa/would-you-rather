import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import { LoadingBar } from 'react-redux-loading';
import _ from 'lodash';

import {handleInitialUsers} from '../actions/users'
import Users from './Users'
import { connect } from 'react-redux';



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialUsers())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {
            this.props.loading === true
            ? null
            : <Route path='/' exact component={Users} />
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({users}) {
  return {
    loading: _.isEmpty(users)
  }
}

export default connect(mapStateToProps)(App)
