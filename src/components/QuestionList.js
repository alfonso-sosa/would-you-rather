import _ from 'lodash';
import React, { Component, Fragment } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { connect } from 'react-redux';
import Question from './Question';


class QuestionList extends Component {
  render() {
    const { questions } = this.props;
    return (
      <Fragment>
        <Grid>
          <h4>Would you rather...</h4>
          <br />
          {
            questions.map(question => {
              return (
                <Row key={question.id}>
                  <Col md={5}>
                    <Question question={question} />
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

function mapStateToProps({ authedUser }, { questions, answered }) {
  const filtered =
    answered ?
      Object.values(questions).filter(
        question => (
          _.includes(
            Object.keys(authedUser.answers),
            question.id)))
      :
      Object.values(questions).filter(
        question => (
          !_.includes(
            Object.keys(authedUser.answers),
            question.id)))

  return {
    questions: filtered.sort((q1, q2) => (q2.timestamp - q1.timestamp))
  }
}

export default connect(mapStateToProps)(QuestionList)
