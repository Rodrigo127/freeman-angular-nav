import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Freeman';
  constructor(private translate: TranslateService,
    private readonly updates: SwUpdate,
    private snackBar: MatSnackBar) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.updates.available.subscribe(event => {
      // let snackBarRef = this.snackBar.open('New version available', 'Refresh');

      // snackBarRef.afterDismissed().subscribe(() => {
      this.updates.activateUpdate().then(() => document.location.reload(true));
      // });
    });


  }
}
