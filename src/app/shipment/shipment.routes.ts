import {
  RouterModule,
  Routes
} from "@angular/router";
import { ShipmentPageComponent } from "./shipment-page.component";

/*
 * Router configuration for the component task
 */
const SHIPMENT_ROUTES: Routes = [
  {
    path: "shipments",
    component: ShipmentPageComponent
  },
  {
    path: "tasks/active",
    component: ShipmentPageComponent
  }
];

export const SHIPMENT_ROUTING = RouterModule.forChild(SHIPMENT_ROUTES);
