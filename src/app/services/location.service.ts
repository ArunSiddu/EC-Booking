import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LocationService {
  constructor(private http: HttpClient) {}

  getLocationDetails() {
    //return this.http.get("http://172.16.135.191:8081/list");
    return this.http.get("http://172.16.135.191:3000/inputValueList");
  }
}
