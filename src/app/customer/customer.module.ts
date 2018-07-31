import { NgModule } from "@angular/core";
import { CustomerPageComponent } from "./customer-page.component";
import { CUSTOMER_ROUTING } from "./customer.routes";

@NgModule({
  imports: [
    CUSTOMER_ROUTING
  ],
  declarations: [
    CustomerPageComponent
  ],
  exports: [
    CustomerPageComponent
  ]
})
export class CustomerModule {
}
