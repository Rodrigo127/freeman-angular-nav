import { Component, OnInit, ViewChild, ElementRef, Renderer2, Inject } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dnsUrl: string;
  @ViewChild('homeVideo') homeVideo: ElementRef;
  constructor(private _renderer2: Renderer2,
    @Inject(DOCUMENT) private _document: Document) {
    this.dnsUrl = environment.dnsUrl;
  }
  ngOnInit(): void {
    window.addEventListener('load', this.playVideo, true);
  }

  ngAfterViewInit(): void {
    this.playVideo();
    let script = this._renderer2.createElement('script');
    script.text = `
      function playhomeVideo(){
        document.getElementById('homeVideo').play();
      }
      playhomeVideo();
    `;
    this._renderer2.appendChild(this._document.body, script);
  }

  playVideo() {
    
      let nativeVideo = this.homeVideo.nativeElement;
      if (nativeVideo) {
      nativeVideo.muted = true;

      if (nativeVideo.paused) {
        nativeVideo.play();
      }
    }
  }
}
