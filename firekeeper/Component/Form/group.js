import React, { Component } from 'react'
import classnames from 'classnames'

import { Row, Col } from 'Component/Grid'

import Styles from './form.sass'
import GridStyles from 'Mixin/layout.sass'

/*
export default class FormGroup extends Component {
    static defaultProps = {
        labelSpan: 4
        , wrapperSpan: 18
    }
    render() {
        return (
            <div className={classnames(Styles['group'])}>
                {
                    this.props.layout === 'horizontal'
                    ?
                    <Row>
                        <Col className={Styles['label']} span={this.props.labelSpan}>
                            <label>{this.props.label}</label>
                        </Col>
                        <Col className={Styles['control']} span={this.props.wrapperSpan}>
                            {this.props.children}
                        </Col>
                    </Row>
                    :
                    undefined
                }
            </div>
        )
    }
}
*/

export default class FormGroup extends Component {
    static defaultProps = {
        labelSpan: 4
        , wrapperSpan: 18
    }
    render() {
        const layout = this.props.layout === 'horizontal'
        return (
            <div className={classnames(Styles['group'], layout ? GridStyles['row'] : undefined)}>
                <div className={classnames(Styles['label'], layout ? GridStyles['col-' + this.props.labelSpan] : undefined)}>
                    <label>{this.props.label}</label>
                </div>
                <div className={classnames(Styles['control'], layout ? GridStyles['col-' + this.props.wrapperSpan] : undefined)}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}