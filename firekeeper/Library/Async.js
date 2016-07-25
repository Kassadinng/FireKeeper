import reqwest from 'reqwest'
import config from 'config/async'

class Async {
    DEFAULT = {
        method: 'post'
        , crossOrigin: false
        , type: 'json'
        , ...config
    }
    CALLBACK = {
        send: () => {}
        , fail: () => {}
        , always: () => {}
        , success: () => {}
    }
    constructor(options, callback) {
        this.options = {
            ...this.DEFAULT
            , ...options
        }
        this.callback = {
            ...this.CALLBACK
            , ...callback
        }
        this.fetch()
    }
    fetch() {
        this.callback.send()
        reqwest(this.options)
        .then(this.callback.success)
        .fail(this.callback.fail)
        .always(this.callback.always)
    }
}

export default function(options, callback) {
    return new Async(options, callback)
}
