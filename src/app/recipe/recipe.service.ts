import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class RecipeService {

  private baseUrl = 'http://10.0.1.88:8080/api/v1';

  constructor(private httpClient: HttpClient) {

  }

  getRecipes(): Observable<Recipe[]> {
    return this.httpClient.get<Recipe[]>(this.baseUrl + '/recipes');
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.httpClient.get<Recipe>(this.baseUrl + '/recipes/' + id);
  }

  createRecipe(recipe: Recipe) {
    console.log(recipe);
    this.httpClient.post(this.baseUrl + '/recipes', recipe).subscribe(() => { }, error => console.error);
  }

  deleteRecipe(recipe: Recipe): Observable<Recipe> {
    return this.httpClient.request<Recipe>('delete', this.baseUrl + '/recipes', { body: recipe });
  }
}
