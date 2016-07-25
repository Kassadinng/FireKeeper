import React, { Component } from 'react'
import classnames from 'classnames'

import { Row, Col } from 'Component/Grid'

export default class GridSystem extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={8}>05</Col>
                    <Col span={3} offset={15}>06</Col>
                </Row>
            </div>
        )
    }
}
