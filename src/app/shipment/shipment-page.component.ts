import {
  Component,
  OnInit
} from "@angular/core";
import {
  DomSanitizer,
  SafeResourceUrl
} from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "educama-shipment-page",
  templateUrl: `./shipment-page.component.html`
})
export class ShipmentPageComponent implements OnInit {

  public safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4203/" + this.activatedRoute.snapshot.url.join("/"));
  }
}
