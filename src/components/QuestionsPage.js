import React, { Component, Fragment } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';
import QuestionList from './QuestionList';

class QuestionsPage extends Component {
  state = {
    answered: false
  }

  handleFilterQuestions = (key, event) => {
    this.setState(() => ({ answered: key === 2 }));
  }

  render() {
    const {answered } = this.state;
    const { questions } = this.props;
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
        <QuestionList questions={questions} answered={answered} />
      </Fragment>
    )
  }
}

function mapStateToProps({ questions }) {
  return { questions }
}

export default connect(mapStateToProps)(QuestionsPage)
