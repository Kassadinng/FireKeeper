import React, { Component } from 'react'
import { Button, ButtonAsync } from 'Component/Button'
import classnames from 'classnames'

import { RequestAsyncExample } from 'config/request'

import Styles from './example.sass'

export default class ButtonExample extends Component {
    render() {
        return (
            <div
                className={classnames(Styles['button-example'])}
            >
                <p className={classnames(Styles['line'])}>按钮分类</p>
                <Button type='primary'>Primary</Button>
                <Button type='default'>默认按钮</Button>
                <Button type='dashed'>虚线按钮</Button>
                <Button type='success'>Success</Button>
                <Button type='info'>Info</Button>
                <Button type='warning'>Warning</Button>
                <Button type='danger'>Danger</Button>
                <p className={classnames(Styles['line'])}>主按钮尺寸</p>
                <Button type='primary' size='extra-small'>extra small button</Button>
                <Button type='primary' size='small'>small button</Button>
                <Button type='primary' size='medium'>default button</Button>
                <Button type='primary' size='large'>large button</Button>
                <p className={classnames(Styles['line'])}>默认按钮尺寸</p>
                <Button type='default' size='extra-small'>extra small button</Button>
                <Button type='default' size='small'>small button</Button>
                <Button type='default' size='medium'>default button</Button>
                <Button type='default' size='large'>large button</Button>
                <p className={classnames(Styles['line'])}>禁用按钮样式</p>
                <Button type='primary' disabled>Primary</Button>
                <Button type='default' disabled>默认按钮</Button>
                <Button type='dashed' disabled>虚线按钮</Button>
                <Button type='success' disabled>Success</Button>
                <Button type='info' disabled>Info</Button>
                <Button type='warning' disabled>Warning</Button>
                <Button type='danger' disabled>Danger</Button>
                <p className={classnames(Styles['line'])}>异步按钮</p>
                <ButtonAsync
                    once
                    type='primary'
                    async={{
                        ...RequestAsyncExample
                    }}
                >
                    点击获取数据
                </ButtonAsync>
            </div>
        )
    }
}
