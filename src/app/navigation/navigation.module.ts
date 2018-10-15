import { NgModule } from "@angular/core";
import { NavigationBarComponent } from "./components/navigation-bar.component";
import { FrontendSharedModule } from "educama-frontend-shared";

@NgModule({
  imports: [
    FrontendSharedModule
  ],
  declarations: [
    NavigationBarComponent
  ],
  exports: [
    NavigationBarComponent
  ]
})
export class NavigationModule {
}
