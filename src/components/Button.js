import React from 'react'
import PropTypes from 'prop-types'

const Button = ({text, color}) => {
  
  return (
    <div>
      <button style= {{background: color}} className = 'btn'>{text}</button>
    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue',
}

Button.propTypes = {
  text: PropTypes.string,
  color : PropTypes.string,
}

export default Button