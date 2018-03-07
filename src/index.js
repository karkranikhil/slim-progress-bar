'use strict';
import React from 'react'
import PropTypes from 'prop-types'
import { Progress } from './styles'
const defaultProps = {
  percent: 0,
  progressType:'header-level',
  position:'top',
  color:'#007cba',
  style: {}
};
const SlimProgressBar = ({percent, position, progressType, height, width, color, className, id, style}) => {
  const progressProps = {}
  if (percent) progressProps.percent = percent
  if (position) progressProps.position = position
  if (progressType) progressProps.progressType = progressType
  if (height) progressProps.height = height
  if (width) progressProps.width = width
  if (color) progressProps.color = color
  if (style) progressProps.style = style
  if (id) {
    progressProps.id = id
    progressProps['data-test-id'] = `${progressProps.id}_progress`
  }
  if (className) progressProps.className = className
  let props = {...defaultProps, ...progressProps};
  return (
    <Progress {...props}></Progress>
)
}

Progress.propTypes = {
  percent: [PropTypes.number,PropTypes.isRequired],
  position: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
  color:PropTypes.string,
}

export default SlimProgressBar;
