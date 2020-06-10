import { Component, OnInit, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-legacy',
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.scss']
})
export class LegacyComponent implements OnInit {
  dnsUrl: string;
  constructor(@Inject(DOCUMENT) private _document: Document,
  private _renderer2: Renderer2) { 
    this.dnsUrl = environment.dnsUrl
  }

  ngOnInit(): void {
  }

  public ngAfterViewInit(){
    var body = document.body;

    body.classList.add("body-gradient");
  }

}
