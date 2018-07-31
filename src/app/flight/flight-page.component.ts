import {
  Component,
  OnInit
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import {
  DomSanitizer,
  SafeResourceUrl
} from "@angular/platform-browser";

@Component({
  selector: "educama-flight-page",
  templateUrl: "./flight-page.component.html"
})
export class FlightPageComponent implements OnInit {
  public safeUrl: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,
              private activatedRoute: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4202/" + this.activatedRoute.snapshot.url[ 0 ].path);
  }
}
