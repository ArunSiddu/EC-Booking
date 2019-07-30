import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
//import { MatNativeDateModule } from "@angular/material/core";

import { AppRoutingModule } from "./app-routing.module";
import { CustomIconService } from "./services/custom-icon.service";
import { AppComponent } from "./app.component";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule, MatRippleModule } from "@angular/material/core";
import { MatIconModule } from "@angular/material";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { HeaderComponent } from "./components/header/header.component";
import { SearchComponent } from "./components/search/search.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, SearchComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatRippleModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [CustomIconService],
  bootstrap: [AppComponent]
})
export class AppModule {}
