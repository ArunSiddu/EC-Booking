import { Component } from "@angular/core";
import { CustomIconService } from "./services/custom-icon.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "easy-bus";
  constructor(private customIconService: CustomIconService) {}
}
