import {
  RouterModule,
  Routes
} from "@angular/router";
import { CustomerPageComponent } from "./customer-page.component";

/*
 * Router configuration for the component task
 */
const CUSTOMER_ROUTES: Routes = [
  {
    path: "customers",
    component: CustomerPageComponent
  }
];

export const CUSTOMER_ROUTING = RouterModule.forChild(CUSTOMER_ROUTES);
