import { Component, OnInit, Input, ElementRef, Renderer2 } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-brochure',
  templateUrl: './brochure.component.html',
  styleUrls: ['./brochure.component.scss']
})
export class BrochureComponent implements OnInit {
  dnsUrl: string;
  urlBrochure;
  showArrow = true;
  //@Input() src: any;
  // @Input() data: any;
  constructor(private sanitizer: DomSanitizer, private renderer: Renderer2,
    private elRef: ElementRef) {
    this.dnsUrl = environment.dnsUrl;
    this.urlBrochure = this.dnsUrl + 'Freeman.pdf';

  }
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    this.showArrow = false;
  };



  // ngAfterViewInit() {
  //   const el = this.elRef.nativeElement;
  //   this.renderer.setProperty(el, 'data', this.src)
  //   this.renderer.setProperty(el, 'outerHTML', el.outerHTML)
  // }

}
