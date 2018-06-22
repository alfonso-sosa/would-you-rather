import React from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';

class User extends React.Component {
  handleLogin = (e) => {
    e.preventDefault();
    const { user, dispatch } = this.props;
    dispatch(setAuthedUser(user.id))
  }

  render() {
    const { user } = this.props;
    return (
      <Panel onClick={this.handleLogin} className="user-panel">
        {/* <Panel.Heading>
          <Panel.Title componentClass="h3"></Panel.Title>
        </Panel.Heading> */}
        <Grid>
          <Row>
            <Col md={1} style={{padding: "1em"}}>
              <Image src={user.avatarURL} circle responsive />
            </Col>
            <Col md={6}>
              <Panel.Body><h3>{user.name}</h3></Panel.Body>
            </Col>
          </Row>
        </Grid>
      </Panel>
    );
  }
}

export default connect(null)(User);