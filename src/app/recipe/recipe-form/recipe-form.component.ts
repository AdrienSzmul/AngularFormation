import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.scss']
})
export class RecipeFormComponent implements OnInit {

  recipe: Recipe;
  recipeForm: FormGroup;


  constructor(private recipeService: RecipeService, private fb: FormBuilder) {

  }

  ngOnInit() {
    this.recipe = new Recipe();
    this.createForm();
  }

  createRecipe() {
    const recipeValue = this.recipeForm.value;

    const recipe = new Recipe();
    recipe.name = recipeValue.name;
    recipe.picture = recipeValue.picture;
    recipe.description = recipeValue.description;
    recipe.instructions = recipeValue.instructions;

    if (recipe.name) {
      this.recipeService.createRecipe(recipe);

    }
  }

  createForm() {
    this.recipeForm = this.fb.group({
      name: ['', Validators.required],
      description: '',
      picture: '',
      instructions: ''
    });
  }

}
