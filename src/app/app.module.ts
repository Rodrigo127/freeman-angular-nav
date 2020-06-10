import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout'

import { ReplacePipe } from './replace.pipe';
import { VideoComponent } from './pages/video/video.component';
import { SafeUrlPipe } from './safe-url.pipe';

import { MapComponent } from './pages/map/map.component';
import { BrochureComponent } from './pages/brochure/brochure.component'; 


import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { LegacyComponent } from './pages/legacy/legacy.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'video',      component: VideoComponent },
  { path: 'map',      component: MapComponent },
  { path: 'brochure',      component: BrochureComponent },
  { path: 'contact-us',      component: ContactUsComponent },
  { path: 'legacy',      component: LegacyComponent },
  // { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ReplacePipe,
    VideoComponent,
    SafeUrlPipe,
    MapComponent,
    BrochureComponent,
    ContactUsComponent,
    LegacyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    NgxExtendedPdfViewerModule,
    FlexLayoutModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
  RouterModule.forRoot(appRoutes),
  ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
