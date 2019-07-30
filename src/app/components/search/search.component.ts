import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { LocationService } from "src/app/services/location.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.scss"]
})
export class SearchComponent implements OnInit {
  searchInfoForm: FormGroup;
  busList: any;
  busLoad: boolean = false;
  options: string[] = ["One", "Two", "Three"];
  constructor(private locationService: LocationService) {}

  ngOnInit() {
    this.locationService.getLocationDetails().subscribe(res => {
      console.log(res);
      this.busList = res;
      this.busLoad = true;
      console.log(this.busList);
    });

    this.searchInfoForm = new FormGroup({
      from: new FormControl(),
      to: new FormControl(),
      date: new FormControl()
    });
  }

  SearchBus() {
    console.log(this.searchInfoForm);
  }
}
