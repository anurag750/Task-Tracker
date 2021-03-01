import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, color}) => {
  
  const onClick = () => {
    console.log('click');
  }
  
  return (
    <div>
      <button onClick = {onClick} style= {{background: color}} className = 'btn'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color : PropTypes.string,
  onClick : PropTypes.func.isRequired(),
}

export default Button