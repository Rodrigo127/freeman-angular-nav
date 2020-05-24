import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _renderer2: Renderer2,
              @Inject(DOCUMENT) private _document: Document) { }

  ngOnInit() {
  
  
  
  }

  public ngAfterViewInit() { 
    let script = this._renderer2.createElement('script');
       script.text = `
       var map;
       var src = '../../assets/kml/ZONA_IND_PERIM.kml';
       src = 'http://www.freemansc.com/kml/ZONA_IND_PERIM.kml';

       function initMap() {
           var zoom = 0;
           if (jQuery(window).width() > 768)
               zoom = 12;
           else
               zoom = 11;

           map = new google.maps.Map(document.getElementById('map'), {
               center: new google.maps.LatLng(25.5285948,-103.6335879,23248),
               zoom: zoom,
               mapTypeId: 'satellite'
           });

           var kmlLayer = new google.maps.KmlLayer(src, {
               suppressInfoWindows: true,
               preserveViewport: true,
               map: map
           });
       }
       `;
       this._renderer2.appendChild(this._document.body, script);
       
       let script2 = this._renderer2.createElement('script');
       script2.type = 'text/javascript';   
       script2.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC3Ri6uG6HZBM3CnPaU4mZdPehWC6ZsI1g&callback=initMap";
       
       this._renderer2.appendChild(this._document.body, script2);
        
 }




    

}
