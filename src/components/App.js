import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom'
import LoadingBar from 'react-redux-loading';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

import Users from './Users'
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';
import QuestionsPage from './QuestionsPage';
import Answer from './Answer';

// from https://stackoverflow.com/questions/43164554/how-to-implement-authenticated-routes-in-react-router-4
function PrivateRoute ({component: Component, authed, ...rest}) {
  return (
    <Route
      {...rest}
      render={(props) => authed === true
        ? <Component {...props} />
        : <Redirect to={{pathname: '/', state: {from: props.location}}} />}
    />
  )
}


class App extends Component {
  componentDidMount(){
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { authedUser } = this.props
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          {
            this.props.loading === true
            ? null
            : <div> 
                <Route path='/' exact component={Users} />
                <PrivateRoute authed={!_.isNull(authedUser)} path='/questions' exact component={QuestionsPage} />
                <PrivateRoute authed={!_.isNull(authedUser)} path='/questions/:id' exact component={Answer} />                
              </div>
          }
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    loading: _.isEmpty(users),
    authedUser
  }
}

export default connect(mapStateToProps)(App)
