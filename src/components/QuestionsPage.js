import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { Col, Grid, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';
import User from './User';

class QuestionsPage extends Component {
  state = {
    answered: false
  }

  handleFilterQuestions = (key, event) => {
    this.setState(() => ({ answered: key === 2 }));
  }

  componentWillMount(){
    const {authedUser} = this.props;
    if (_.isNull(authedUser)){
      this.props.history.push('/')
    }
  }

  render() {
    const {answered } = this.state;
    const { questions, authedUser } = this.props;
    return (
      <Fragment>
        <Navbar onSelect={this.handleFilterQuestions}>
          <Navbar.Header>
            <Navbar.Brand>
              Questions
            </Navbar.Brand>
          </Navbar.Header>
          <Nav activeKey={answered === true ? 2 : 1}>
            <NavItem eventKey={1} href="#">
              Unanswered
            </NavItem>
            <NavItem eventKey={2} href="#">
              Answered
            </NavItem>
          </Nav>
        </Navbar>
        <Grid>
          <Row>
            <Col md={5} className="pull-left">
              <QuestionList questions={questions} answered={answered} />
            </Col>
            <Col md={5} className="pull-right">
              <User user={authedUser}/>
            </Col>
          </Row>
        </Grid>
        
      </Fragment>
    )
  }
}

function mapStateToProps({ questions, authedUser }) {
  return { questions, authedUser }
}

export default connect(mapStateToProps)(QuestionsPage)
