import React, { Component } from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import Burger from '../../components/Layout/Burger/Burger';
import BuildControls from '../../components/Layout/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 1,
            bacon: 1,
            cheese: 2,
            meat: 1
        },
        totalPrice: 4
    };

    addIngredientHandler = (type) => {
        const previousCount = this.state.ingredients[type];
        const updatedCount = previousCount + 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const previousPrice = this.state.totalPrice;
        const updatedPrice = previousPrice + priceAddition;
        this.setState({
            ingredients: updatedIngredient,
            totalPrice: updatedPrice
        });
    };

    removeIngredientHandler = (type) => {
        const previousCount = this.state.ingredients[type];
        if (previousCount <= 0) return;
        const updatedCount = previousCount - 1;
        const updatedIngredient = {
            ...this.state.ingredients
        };
        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const previousPrice = this.state.totalPrice;
        const updatedPrice = previousPrice - priceDeduction;
        this.setState({
            ingredients: updatedIngredient,
            totalPrice: updatedPrice
        });
    };
    
    render() {
        return (
            <Auxiliary>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={this.state.ingredients}
                    price={this.state.totalPrice} />
            </Auxiliary>
        );
    };
}

export default BurgerBuilder;
