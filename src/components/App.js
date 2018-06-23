import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingBar from 'react-redux-loading';
import _ from 'lodash';

import Users from './Users'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionsPage from './QuestionsPage';



class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {
            this.props.loading === true
            ? null
            : <div> 
                <Route path='/' exact component={Users} />
                <Route path='/questions' component={QuestionsPage} />
              </div>
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
