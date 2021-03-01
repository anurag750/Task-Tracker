import React from 'react'
import Button from './Button'
import PropTypes from 'prop-types'

const Header = ({title}) => {
  return (
    <header className = 'header'>
      <h1>{title}</h1>
      <Button text = 'Add' color = 'green' onClick = {onClick} />
    </header>
  )
}


Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title : PropTypes.string
}

export default Header
 