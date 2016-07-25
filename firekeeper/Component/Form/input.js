import React, { Component } from 'react'
import classnames from 'classnames'

import Styles from './form.sass'

export default class Input extends Component {
    static defaultProps = {
        size: 'medium'
        , type: 'text'
        , placeholder: null
        , value: ''
        , disabled: false
        , name: null
        , status: 'normal'
        , regular: false
        , before: null
        , after: null
        , tabindex: null
        , onChange: () => {}
    }
    state = {
        value: this.props.value
        , status: this.props.status
    }
    handleChange = (e) => {
        const value = e.target.value
        this.verify(value)
        this.setState({ value: value })
        this.props.onChange(value)
    }
    /**
     * verify - 进行正则验证
     *
     * @param  {String} value 验证的值
     * @returns {type}       description
     */
    verify(value) {
        let [status, result] = ['normal', false]
        const regular = this.props.regular
        if (regular === false) {
            return false
        }
        else if (regular === null) {
            [status, result] = ['success', true]
        }
        else if (regular.test) {
            result = regular.test(value)
            status = result ? 'success' : 'error'
        }
        this.setState({ status: status })
        return result
    }
    render() {
        const {
            size
            , before
            , after
            , regular
            , status
            , ...props
        } = this.props
        return (
            <input
                {...props}
                value={this.state.value}
                onChange={this.handleChange}
                className={classnames(Styles['input'], Styles[size], Styles[this.state.status])}
            />
        )
    }
}
