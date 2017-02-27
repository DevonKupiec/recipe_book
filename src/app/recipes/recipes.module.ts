import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RecipesComponent } from "./recipes.component";
import { RecipeItemComponent } from "./recipe-list/recipe-item.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { RecipeEditComponent } from "./recipe-edit/recipe-edit.component";
import { RecipeStartComponent } from "./recipe-start.component";
import { recipesRouting } from "./recipes.routing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
              imports: [
                  ReactiveFormsModule,
                  SharedModule,
                  recipesRouting
              ],
              exports: [],
              declarations: [
                  RecipesComponent,
                  RecipeListComponent,
                  RecipeItemComponent,
                  RecipeDetailComponent,
                  RecipeEditComponent,
                  RecipeStartComponent,
              ],
              providers: [],
          })
export class RecipesModule {
}
