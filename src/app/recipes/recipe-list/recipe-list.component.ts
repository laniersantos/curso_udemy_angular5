import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Array<Recipe> = new Array(...[new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-collage.jpg'),
                                         new Recipe('A Test Recipe', 'This is simply a test', 'http://www.seriouseats.com/images/2017/04/20170405-one-pot-chicken-recipes-roundup-collage.jpg')]);

  constructor() { }

  ngOnInit() {
  }

}
