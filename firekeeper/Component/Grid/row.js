import React, { Component } from 'react'
import classnames from 'classnames'

import Styles from 'Mixin/layout.sass'

export default class Row extends Component {
    static defaultProps = {
        className: ''
    }
    render() {
        return (
            <div className={classnames(Styles['row'], this.props.className)}>
                {this.props.children}
            </div>
        )
    }
}
