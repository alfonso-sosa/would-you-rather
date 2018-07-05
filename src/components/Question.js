import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Question extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    const { question } = this.props;
    this.props.history.push(`questions/${question.id}`)
  }

  render() {
    const { question } = this.props;
    return (
      <Panel onClick={this.handleClick} className="question-panel">        
        <Panel.Body>
          <h4>{`${question.optionOne.text}?`}
          <br/><br/>
          or
          <br/><br/>
          {`${question.optionTwo.text}?`}</h4>
        </Panel.Body>
        
      </Panel>
    );
  }
}

export default withRouter(connect(null)(Question));
