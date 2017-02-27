import { Component, ViewContainerRef } from "@angular/core";
import { ToastsManager } from "ng2-toastr";
import { RecipeService } from "./recipes/recipe.service";

@Component({
               selector: 'rb-root',
               templateUrl: './app.component.html',
           })
export class AppComponent {
    constructor(public toastr: ToastsManager, vRef: ViewContainerRef, recipeService: RecipeService) {
        toastr.setRootViewContainerRef(vRef);
        recipeService.fetchData();
    }


}
