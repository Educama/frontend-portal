import { NgModule } from "@angular/core";
import { ShipmentPageComponent } from "./shipment-page.component";
import { SHIPMENT_ROUTING } from "./shipment.routes";

@NgModule({
  imports: [
    SHIPMENT_ROUTING
  ],
  declarations: [
    ShipmentPageComponent
  ],
  exports: [
    ShipmentPageComponent
  ]
})
export class ShipmentModule {
}
