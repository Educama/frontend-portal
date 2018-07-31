import { NgModule } from "@angular/core";
import { FLIGHT_ROUTING } from "./flight.routes";
import { FlightPageComponent } from "./flight-page.component";

@NgModule({
  imports: [
    FLIGHT_ROUTING
  ],
  declarations: [
    FlightPageComponent
  ],
  exports: [
    FlightPageComponent
  ]
})
export class FlightModule {
}
