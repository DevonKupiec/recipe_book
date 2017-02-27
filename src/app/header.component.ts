import { Component, ViewContainerRef } from "@angular/core";
import { RecipeService } from "./recipes/recipe.service";
import { ToastsManager } from "ng2-toastr";

@Component({
               selector: 'rb-header',
               templateUrl: './header.component.html',
           })
export class HeaderComponent {

    constructor(public recipeService: RecipeService,
                public toastr: ToastsManager,
                vRef: ViewContainerRef) {
        toastr.setRootViewContainerRef(vRef);
    }

    onStore() {
        this.recipeService.storeData().subscribe(
            data => {
                console.log(data);
                this.toastr.success("Recipe list saved", "Success");
            },
            error => {
                console.log(error);
                this.toastr.error("Recipe list failed to save!", "Error");
            }
        );
    }

    onFetch() {
        this.recipeService.fetchData()
        ;
        //this.toastr.success("Recipe list retrieved", "Success");
    }
}
