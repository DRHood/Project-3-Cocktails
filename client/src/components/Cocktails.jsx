
import React, { Component } from 'react'
import axios from 'axios'

export default class Cocktails extends Component {

    state = {
        cocktails: []
    }

    // componentDidMount to retrieve display data,
    // make calls to local express server/external API
    // setState can be run here -REMINDER `setState` is async function
    componentDidMount() {
        axios.get('/api/cocktails').then((res) => {
                this.setState({cocktails: res.data});
        });
    }

    // render function manages what's shown in browser
    render() {
        return (
            <div>
                {/* Accessing value of cocktails from state object */}
                <h1>{this.state.cocktails}</h1>
            </div>
        )
    }
}
