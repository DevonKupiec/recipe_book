import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header.component";
import { RecipeService } from "./recipes/recipe.service";
import { ShoppingListService } from "./shopping-list/shopping-list.service";
import { routing } from "./app.routing";
import { ToastModule } from "ng2-toastr";
import { HttpModule } from "@angular/http";
import { CoreModule } from "./core.module";

@NgModule({
              declarations: [
                  AppComponent,
                  HeaderComponent
              ],
              imports: [
                  BrowserModule,
                  routing,
                  HttpModule,
                  ToastModule.forRoot(),
                  CoreModule
              ],
              providers: [RecipeService, ShoppingListService],
              bootstrap: [AppComponent]
          })
export class AppModule {
}
