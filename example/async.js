import React, { Component } from 'react'
import Async from 'Component/Async'
import { Button } from 'Component/Button'
import { RequestAsyncExample } from 'config/request'

export default class AsyncExample extends Component {
    render() {
        const async = {
            url: RequestAsyncExample.url
        }
        return (
            <div>
                <h1>异步组件示例</h1>
                <Async
                    async={async}
                >
                    <Template />
                </Async>
            </div>
        )
    }
}

class Template extends Component {
    handleData() {
        const children = this.props.data.map((child, index) => {
            return React.createElement(Line, {
                key: index
                , name: child.name
                , age: child.age
            })
        })
        return children
    }
    render() {
        return (
            <div>
                {this.handleData()}
            </div>
        )
    }
}

class Line extends Component {
    render() {
        return (
            <div>
                <label>{this.props.name}</label>
                :
                <span>{this.props.age}</span>
            </div>
        )
    }
}
