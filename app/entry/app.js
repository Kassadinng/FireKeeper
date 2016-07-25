import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import './app.sass'
import Styles from 'Mixin/normalize.sass'

import FormExample from 'example/form'
import GridExample from 'example/grid'

class App extends Component {
    render() {
        return (
            <div>
                <FormExample />
            </div>
        )
    }
}

ReactDOM.render(
    <App />
    , document.getElementById('app')
)
