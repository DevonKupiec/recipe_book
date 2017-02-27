import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ShoppingListComponent } from "./shopping-list.component";
import { ShoppingListAddComponent } from "./shopping-list-add.component";
import { shoppingListRouting } from "./shopping-list.rouing";
import { SharedModule } from "../shared/shared.module";

@NgModule({
              imports: [
                  FormsModule,
                  SharedModule,
                  shoppingListRouting
              ],
              exports: [ShoppingListComponent],
              declarations: [
                  ShoppingListComponent,
                  ShoppingListAddComponent
              ],
              providers: [],
          })
export class ShoppingListModule {
}
