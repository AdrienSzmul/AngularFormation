import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipe: Recipe;


  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.recipe = new Recipe();
  }

  createRecipe() {
    if (this.recipe.name) {
      this.recipeService.createRecipe(this.recipe);
      // console.log(this.recipe);
    }
  }

}
