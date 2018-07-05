import React from 'react';
import { Panel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Poll extends React.Component {

  handleClick = (e) => {
    e.preventDefault();
    
  }

  render() {
    console.log(this.props)
    return (
      <div>hello</div>
    );
  }
}

export default connect(null)(Poll);
