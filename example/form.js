import React, { Component } from 'react'
import classnames from 'classnames'

import {
    Input
    , Form
    , FormGroup
} from 'Component/Form'

import Styles from './example.sass'
import FormStyles from 'Component/Form/form.sass'

export default class FormExample extends Component {
    render() {
        return (
            <div className={classnames(Styles['button-example'])}>
                <Form layout="basic">
                    <FormGroup label='姓名'>
                        <Input />
                    </FormGroup>
                    <FormGroup label='电话号码'>
                        <Input />
                    </FormGroup>
                </Form>
            </div>
        )
    }
}
