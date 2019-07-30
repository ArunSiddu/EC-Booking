import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.init();
  }

  registerIcon(filename: string, customname?: string) {
    if (!customname) {
      customname = filename;
    }
    this.matIconRegistry.addSvgIcon(
      customname,
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        `../../assets/icons/${filename}.svg`
      )
    );
  }

  init() {
    // this.registerIcon("FILENAME", "ICONNAME");
    // icon name is optional, if it isn't filled, filename will be used as the icon name
    this.registerIcon("bus");
    this.registerIcon("user");
    this.registerIcon("city");
  }
}
