import {
  RouterModule,
  Routes
} from "@angular/router";
import { FlightPageComponent } from "./flight-page.component";

/*
 * Router configuration for the component flight
 */
const FLIGHT_ROUTES: Routes = [
  {
    path: "flights",
    children: [
      { path: "airlines", component: FlightPageComponent },
      { path: "airports", component: FlightPageComponent }
    ]
  }
];

export const FLIGHT_ROUTING = RouterModule.forChild(FLIGHT_ROUTES);
