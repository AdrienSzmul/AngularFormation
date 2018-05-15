import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {

  id: string;
  recipe: Recipe;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService) {

    this.id = this.route.snapshot.paramMap.get('id');
    recipeService.getRecipe(+this.id).subscribe(recipe => this.recipe = recipe,
      error => console.error('Error getting recipe', error));
  }

  ngOnInit() {
  }

}
