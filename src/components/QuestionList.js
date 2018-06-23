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
            Object.keys(questions).map((key) => {
              const question = questions[key];
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
  return {
    questions:
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

  }
}

export default connect(mapStateToProps)(QuestionList)
