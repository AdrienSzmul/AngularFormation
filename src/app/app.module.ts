import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CustomMaterialModule } from './custom-material/custom-material.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserAnimationsModule,
    CustomMaterialModule,
    RecipeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
