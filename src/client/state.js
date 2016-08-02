import { observable, asFlat, toJS, toJSON } from 'mobx'

// Default state structure
let defaultState = observable({
    app: {
        title: 'Mobx-starter',
        statusCode: 200,
        hostname: 'localhost'
    },
    account: {
        username: null
    },
    todos: {
        loading: false,
        items: asFlat([])
    }
})

// Export an instance of our state
module.exports = global.isClient ? defaultState : (toJS ? toJS(defaultState) : toJSON(defaultState))