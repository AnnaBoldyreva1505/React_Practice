import { RecipeList } from "./RecipeList/RecipeList";
import initialRecipes from "../recipes.json";
import { GlobalStyle } from "./GlobalStyle";
import { RecipeForm } from "./RecipeForm/RecipeForm";
// import {Layout} from './Layout'
import { Component } from "react";

export class App extends Component {
  state = {
    recipes: initialRecipes,
  }

  addRecipe = newRecipe => {
    this.setState(prevState => {
      return {
        recipes: [...prevState.recipes, newRecipe]
      }
    })
  }

  deleteRecipes = recipeId => {
    this.setState(prevState => {
      return {
        recipes: prevState.recipes.filter(recipe => recipe.id !== recipeId),
      }
    })
  }

  selectImg = imgUrl => {
    this.setState({
      selectedImg: imgUrl,
    })
  }

  render(){
    return (
      <>
      <RecipeForm onAdd={this.addRecipe}/>
      {/* при передачи пропсом метода класса в компонент принято называть их on... действие (onDelete, onChange и т.п.) */}
        <RecipeList items={this.state.recipes} onDelete={this.deleteRecipes} />
        
        <GlobalStyle />
      </>
    );
  }
};
