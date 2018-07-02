import _ from 'lodash';
import React, { Fragment } from 'react';
import { Col, Grid, Image, Panel, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

class User extends React.Component {

  isLoggedInUser = (user) => {
    const { authedUser } = this.props;
    return !_.isEmpty(authedUser) && authedUser.id === user.id;
  }



  handleClick = (e) => {
    e.preventDefault();
    const { user, dispatch } = this.props;

    // logged in -> logout, take to user selection
    if (this.isLoggedInUser(user)){
      dispatch(setAuthedUser(null))
      this.props.history.push('/')
    }
    // no user -> log in with this user, take to questions
    else {
      dispatch(setAuthedUser(user))
      this.props.history.push('/questions')
    }
    
  }

  render() {
    const { user } = this.props;
    
    // render is triggered on reload, but before RECEIVE_USERS is done
    if (_.isNull(user)) {
      return null
    }
    return (
      <Panel onClick={this.handleClick} className="user-panel">
        <Grid cols={4}>
          <Row>
            <Col xs={4} sm={1} md={1} lg={1} style={{ padding: "1em" }}>
              <Image src={user.avatarURL} circle responsive />
            </Col>
            <Col xs={6}>
              <Panel.Body>
                { this.isLoggedInUser(user) ? <div>Signed in as:</div> : null }
                <h4>{user.name}</h4>
                { this.isLoggedInUser(user) ?
                  <Fragment>
                    Questions: {Object.keys(user.questions).length}
                    &nbsp;
                    Answers: {Object.keys(user.answers).length}
                  </Fragment> 
                  : null                   
                }
                
              </Panel.Body>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(User));