import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RecipesComponent } from './recipes/recipes.component';
import { CustomMaterialModule } from '../custom-material/custom-material.module';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RouterModule } from '@angular/router';
import { RecipeService } from './recipe.service';
import { HttpClientModule } from '@angular/common/http';
import { ToArrayPipe } from './to-array.pipe';


@NgModule({
  imports: [
    CommonModule,
    CustomMaterialModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    RecipesComponent,

  ],
  declarations: [
    RecipeComponent,
    RecipesComponent,
    RecipeDetailComponent,
    ToArrayPipe
  ],
  providers: [
    RecipeService
  ]
})
export class RecipeModule { }
