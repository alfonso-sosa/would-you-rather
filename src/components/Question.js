import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

class Question extends React.Component {
  
  render() {
    const { question } = this.props;
    return (
      <Panel>        
        <Panel.Body>
          <h4>{`${question.optionOne.text}?`}
          <br/>
          <br/>
          {`${question.optionTwo.text}?`}</h4>
        </Panel.Body>
        
      </Panel>
    );
  }
}

export default connect(null)(Question);