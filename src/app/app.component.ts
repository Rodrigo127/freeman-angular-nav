import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Freeman';
  constructor(private translate: TranslateService,
    private readonly updates: SwUpdate,) {
    translate.setDefaultLang('en');
}
}
