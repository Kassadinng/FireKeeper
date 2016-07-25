import React, { Component } from 'react'
import classnames from 'classnames'

import Styles from 'Mixin/layout.sass'

export default class Row extends Component {
    render() {
        return (
            <div className={classnames(Styles['row'])}>
                {this.props.children}
            </div>
        )
    }
}
