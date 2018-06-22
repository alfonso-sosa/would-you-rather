import React, { Component, Fragment } from 'react'
import { Grid, Row, Col, Label } from 'react-bootstrap'
import { connect } from 'react-redux'
import Question from './Question';


class Questions extends Component {
  render() {
    const { questions } = this.props;
    return (
      <Fragment>
        <br />
        <Grid>
          {
            Object.keys(questions).map((key) => {
              const question = questions[key];
              return (
                <Row key={question.id}>
                  <Col md={5}>
                    <Question question={question}/>
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

function mapStateToProps({ questions }) {
  return {
    questions
  }
}

export default connect(mapStateToProps)(Questions)
