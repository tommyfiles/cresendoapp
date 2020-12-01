import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RecipeComponent } from './recipe/recipe.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { PromosComponent } from './promos/promos.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecipeComponent,
    NavigationComponent,
    FooterComponent,
    PromosComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
