import React, { Component } from 'react'
import classnames from 'classnames'

import Styles from './form.sass'

export default class Form extends Component {
    static defaultProps = {
        url: ''
        , method: 'post'
        , layout: 'basic'
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        const children = React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {
                key: index
                , layout: this.props.layout
            })
        })
        return (
            <form
                action={this.props.url}
                method={this.props.method}
                onSubmit={this.handleSubmit}
                className={classnames(Styles['form'], Styles[this.props.layout])}
            >
                {children}
            </form>
        )
    }
}
