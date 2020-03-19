
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Cocktails extends Component {

    state = {
        cocktails: [],
        addOption: false,
    }

    // componentDidMount to retrieve display data,
    // make calls to local express server/external API
    // setState can be run here -REMINDER `setState` is async function
    componentDidMount() {
        axios.get('/api/cocktails').then((res) => {
                this.setState({cocktails: res.data});
        });
    }

    toggleAdd = () => {
        this.setState({
            addOption: !this.state.addOption,
        });
    }

    // render function manages what's shown in browser
    render() {
        return (
            <div>
                <h1>Cocktails</h1>
                {
                    this.state.cocktails.map((cocktail, i) => {
                        return (
                            <div key={ i }>
                                <img src={ cocktail.image }></img>
                                <br/>
                                <Link to={ cocktail._id }>{ cocktail.name }</Link>
                            </div>
                        )
                    })
                }
                <div>
                    <button onClick={ this.toggleAdd }>Add Cocktail</button>
                </div>
                {
                    this.state.addOption
                        ?<form onSubmit={ this.addCocktail }>
                            <input type="text" name="name" onChange={ this.changeInput }/>
                            <input type="text" name="glass" onChange={ this.changeInput }/>
                            <input type="text" name="image" onChange={ this.changeInput }/>
                            <input type="text" name="ingredients" onChange={ this.changeInput }/>
                            <input type="text" name="recipe" onChange={ this.changeInput }/>
                            <input type="submit" value="Add"/>
                        </form>
                }
            </div>
        )
    }
}
