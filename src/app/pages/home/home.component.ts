import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dnsUrl: string;
  @ViewChild('homeVideo') homeVideo: ElementRef;
  constructor() {
    this.dnsUrl = environment.dnsUrl;
  }
  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    let nativeVideo = this.homeVideo.nativeElement;
    nativeVideo.muted = true;

    if (nativeVideo.paused) {
      nativeVideo.play();
    }


  }

}
