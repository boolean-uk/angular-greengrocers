import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class IconLoaderService {

  private iconBasePath = '../../assets/icons/';
  private iconFormat = '%03d-%s.svg';

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {}

  registerIcons(icons: string[]) {
    icons.forEach((iconName) => {
      const iconUrl = this.getIconUrl(iconName);
      this.matIconRegistry.addSvgIcon(
        iconName,
        this.domSanitizer.bypassSecurityTrustResourceUrl(iconUrl)
      );
    });
  }

  private getIconUrl(iconName: string): string {
    return `${this.iconBasePath}${iconName}.svg`;
  }
}

