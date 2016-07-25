import React, { Component } from 'react'
import classnames from 'classnames'

import Styles from './form.sass'

export default class FormGroup extends Component {
    render() {
        return (
            <div className={classnames(Styles['group'])}>
                <div className={classnames(Styles['label'])}>
                    <label>{this.props.label}</label>
                </div>
                <div className={classnames(Styles['control'])}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}