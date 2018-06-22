import React from 'react';
import { Grid, Row, Col, Panel, Image } from 'react-bootstrap';
import { connect } from 'react-redux';

class Question extends React.Component {
  
  render() {
    const { question } = this.props;
    console.log(question);
    return (
      <Panel className="user-panel">
        
        <Panel.Body>
          <h3>{question.optionOne.text}</h3>
          <br/>
          <h3>{question.optionTwo.text}</h3>
        </Panel.Body>
        
      </Panel>
    );
  }
}

export default connect(null)(Question);