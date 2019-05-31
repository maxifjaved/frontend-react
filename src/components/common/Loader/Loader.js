import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { Spin } from 'antd'

import s from './Loader.module.css'

const Loader = ({ spinning = true, fullScreen }) => {
  return (
    <div
      className={classnames(s['loader'], {
        [s['hidden']]: !spinning,
        [s['fullScreen']]: fullScreen,
      })}
    >
      <Spin size="large" />
    </div>
  )
}

Loader.propTypes = {
  spinning: PropTypes.bool,
  fullScreen: PropTypes.bool,
}

export default Loader