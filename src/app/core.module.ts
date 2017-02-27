import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { HomeComponent } from "./home.component";

@NgModule({
              exports: [
                  DropdownDirective
              ],
              declarations: [
                  DropdownDirective,
                  HomeComponent
              ],
          })
export class CoreModule {
}
