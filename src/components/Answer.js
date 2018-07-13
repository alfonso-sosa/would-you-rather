import React, {Fragment} from 'react';
import { Col, Grid, Nav, Navbar, NavItem, Row, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import User from './User';

class Answer extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    
  }

  render() {
    const {authedUser, questions, users, match} = this.props;
    const question = questions[match.params.id];
    const userWhoAsked = users[question.author];
    console.log(question);
    console.log(users)
    console.log(userWhoAsked)
    return (
      <Fragment>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              Would you rather...
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Grid>
          <Row>
            <Col md={5} className="pull-left">
              <Panel>{question.optionOne.text}</Panel>
              <Panel>{question.optionTwo.text}</Panel>
              <User user={userWhoAsked}/>
            </Col>
            <Col md={5} className="pull-right">
              <User user={authedUser}/>
            </Col>
          </Row>
        </Grid>


      </Fragment>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return { questions, users, authedUser }
}

export default connect(mapStateToProps)(Answer);
