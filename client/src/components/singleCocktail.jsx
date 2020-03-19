import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default class SingleCocktail extends Component {
    state = {
        cocktail: {},
        editCocktail: {},
        redirect: false,
    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('/api/cocktails' + id).then((res) => {
            this.setState({
                cocktail: res.data,
                editCocktail: res.data,
            });
        });
    }

    changeInput = (event) => {
        const updatedCocktail = { ...this.state.editCocktail };
        updatedCocktail[event.target.name] = event.target.value;
        this.setState({
            editCocktail: updatedCocktail,
        });
    }

    submitUpdateForm = (event) => {
        event.preventDefault();
        const id = this.props.match.params.id;
        axios.put('/api/cocktails/' + id, this.state.editCocktail).then(() => {
            this.componentDidMount();
        });
    }

    clickDelete = () => {
        const id = this.props.match.params.id;
        axios.delete('/api/cocktails/' + id).then(() => {
            this.setState({
                redirect: true,
            });
        });
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/"/>;
        }
    
        const { name, glass, image, ingredients, recipe } = this.state.creature;
        return (
            <div>
                <img src={ image } alt={ name }></img>
                <h2>{ name }</h2>
                <h3>{ glass }</h3>
                {
                    ingredients.map((ingredient, i) => {
                        return (
                            <ul key={ i }>
                                <li>{ ingredient }</li>
                            </ul>
                        )
                    })
                }
                <p>{ recipe }</p>

                <form onSubmit={ this.submitUpdateForm }>
                    <input type="text" name="name" value={ this.state.editCocktail.name }
                        onChange={ this.changeInput }/>
                    <input type="text" name="glass" value={ this.state.editCocktail.glass }
                        onChange={ this.changeInput }/>
                    <input type="text" name="image" value={ this.state.editCocktail.image }
                        onChange={ this.changeInput }/>
                    <input type="text" name="ingredients" value={ this.state.editCocktail.ingredients }
                        onChange={ this.changeInput }/>
                    <input type="text" name="recipe" value={ this.state.editCocktail.recipe }
                        onChange={ this.changeInput }/>
                    <input type="submit" value="Update"/>
                </form>

                <button onClick={ this.clickDelete }>Delete cocktail</button>
            </div>
        )
    }
}
