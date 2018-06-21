import React, { Component, Fragment } from 'react'
import { Grid, Row, Col, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'


class Users extends Component {
  render() {
    const { users } = this.props;
    console.log(users);
    return (
      <Fragment>
        <br />
        <Grid>
          {
            Object.keys(users).map((key) => {
              const user = users[key];
              return (
                <Row>
                  <Col xs={12} md={8}>
                    <Panel>
                      <Panel.Heading>
                        <Panel.Title componentClass="h3"></Panel.Title>
                      </Panel.Heading>
                      <Panel.Body>{user.name}</Panel.Body>
                    </Panel>
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
