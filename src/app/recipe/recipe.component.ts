import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from './recipe.model';
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


  ngOnInit() {

  }

  showDetails() {
    this.isExpanded = !this.isExpanded;
    this.buttonText = this.isExpanded ? HIDE_DETAILS : SHOW_DETAILS;
  }

}
