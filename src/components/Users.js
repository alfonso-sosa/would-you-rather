import React, { Component, Fragment } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'
import { connect } from 'react-redux'
import User from './User';


class Users extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <Fragment>
        <br />
        <Grid>
          <h2><Label bsStyle="info">Select a user</Label></h2>
          <br/>
          {
            Object.keys(users).map((key) => {
              const user = users[key];
              return (
                <Row key={user.id}>
                  <Col md={5}>
                    <User user={user}/>
                  </Col>
                </Row>
              )
            })
          }

        </Grid>
      </Fragment>
    )
  }
}

function mapStateToProps({ users }) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Users)
