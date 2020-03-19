import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Spirits extends Component {

    state = {
        spirits: [],
        addOption: false,
        newSpirit: {
            typeOf: '',
            image: '',
            description: '',
        },
    }

    // componentDidMount to retrieve display data,
    // make calls to local express server/external API
    // setState can be run here -REMINDER `setState` is async function
    componentDidMount() {
        axios.get('/api/spirits').then((res) => {
                this.setState({spirits: res.data});
        });
    }

    toggleAdd = () => {
        this.setState({
            addOption: !this.state.addOption,
        });
    }

    changeInput = (event) => {
        const updatedNewCocktail = { ...this.state.newSpirit };
        updatedNewCocktail[event.target.name] = event.target.value;
        this.setState({
            newSpirit: updatedNewCocktail,
        });
    }

    addSpirit = (event) => {
        event.preventDefault();
        axios.post('api/spirits', this.state.newSpirit).then(() => {
            this.toggleAdd();
            this.componentDidMount();
        })
    }

    // render function manages what's shown in browser
    render() {
        return (
            <div className="container">
                <h1>Cocktail Culture</h1>
                <h2>Spirits Information</h2>
                {
                    this.state.spirits.map((spirit, i) => {
                        return (
                            <div key={ i }>
                                <img src={ spirit.image } alt={ spirit.name }></img>
                                <br/>
                                <Link to={ spirit._id }><span className="txt-hl">{ spirit.name }</span></Link>
                            </div>
                        )
                    })
                }
                <div>
                    <button onClick={ this.toggleAdd }>Add Spirit</button>
                </div>
                {
                    this.state.addOption
                        ? <form onSubmit={ this.addSpirit }>
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
