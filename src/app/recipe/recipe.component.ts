import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
const SHOW_DETAILS = 'Show Details';
const HIDE_DETAILS = 'Hide Details';
@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  @Input() recipe: Recipe;
  isExpanded = false;
  buttonText = SHOW_DETAILS;

  @Output()
  deleteEvent = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {

  }

  ngOnInit() {

  }

  showDetails() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? HIDE_DETAILS : SHOW_DETAILS;
  }

  delete() {
    this.recipeService.deleteRecipe(this.recipe).subscribe(() => this.deleteEvent.emit(this.recipe),
      error => console.error('error deleting recipe', error));
  }

}
