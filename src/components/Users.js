import React, {Component} from 'react'
import {connect} from 'react-redux'


class Users extends Component {
  render() {
    return (
      <div>Users</div>
    )
  }
}

function mapStateToProps({users}) {
  return {
    users
  }
}

export default connect(mapStateToProps)(Users)
