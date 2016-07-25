import React, { Component } from 'react'
import classnames from 'classnames'

import Styles from 'Mixin/layout.sass'

export default class Col extends Component {
    static defaultProps = {
        span: 6
        , offset: 0
    }
    render() {
        return (
            <div className={classnames(Styles['col-' + this.props.span], Styles['offset-' + this.props.offset])}>
                {this.props.children}
            </div>
        )
    }
}
