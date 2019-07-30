import React, { Component } from 'react'
import { Button, Card, Elevation, InputGroup } from '@blueprintjs/core'
import PropTypes from 'prop-types'

export default class LoginPageComponent extends Component {
  state = {
    loading: false
  }
  static propTypes = {}
  render () {
    return (
      <Card interactive elevation={Elevation.TWO} className='LoginCardContainer'>
        <InputGroup
          disabled={false}
          large
          leftIcon='filter'
          onChange={this.handleFilterChange}
          placeholder='Enter the '
        />
      </Card>
    )
  }
}
LoginPageComponent.defaultProps = {
  logIn: true,
  signUp: false,
  forgetPassword: false
}
LoginPageComponent.propTypes = {
  signIn: PropTypes.bool,
  signUp: PropTypes.bool,
  forgetPassword: PropTypes.bool
}
