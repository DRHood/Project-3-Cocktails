
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Cocktails extends Component {

    state = {
        cocktails: [],
        addOption: false,
        newCocktail: {
            name: '',
        glass: '',
        image: '',
        ingredients: [],
        recipe: '',
        },
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

    changeInput = (event) => {
        const updatedNewCocktail = { ...this.state.newCocktail };
        updatedNewCocktail[event.target.name] = event.target.value;
        this.setState({
            newCocktail: updatedNewCocktail,
        });
    }

    addCocktail = (event) => {
        event.preventDefault();
        axios.post('api/cocktails', this.state.newCocktail).then(() => {
            this.toggleAdd();
            this.componentDidMount();
        })
    }

    // render function manages what's shown in browser
    render() {
        return (
            <div className="container">
                <h1>Cocktail Culture</h1>
                {
                    this.state.cocktails.map((cocktail, i) => {
                        return (
                            <div key={ i }>
                                <img src={ cocktail.image } alt={ cocktail.name }></img>
                                <br/>
                                <Link to={ cocktail._id }><span class="txt-hl">{ cocktail.name }</span></Link>
                            </div>
                        )
                    })
                }
                <div>
                    <button onClick={ this.toggleAdd }>Add Cocktail</button>
                </div>
                {
                    this.state.addOption
                        ? <form onSubmit={ this.addCocktail }>
                            <input type="text" name="name" value="name" onChange={ this.changeInput }/>
                            <input type="text" name="glass" value="glass" onChange={ this.changeInput }/>
                            <br/>
                            <input type="text" name="image" value="image" onChange={ this.changeInput }/>
                            <input type="text" name="ingredients" value="ingredients" onChange={ this.changeInput }/>
                            <br/>
                            <input type="text" name="recipe" value="recipe" onChange={ this.changeInput }/>
                            <br/>
                            <input type="submit" value="Add"/>
                        </form>
                        : null
                }
            </div>
        )
    }
}
