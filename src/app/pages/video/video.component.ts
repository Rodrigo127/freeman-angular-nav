import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  videoUrl: any;
  constructor(private translate : TranslateService) { 
    this.translate.get('video').subscribe((success: any)=>{
      this.videoUrl = success;
      console.log(this.videoUrl);
      
    });
           

  }

  ngOnInit() {
    
    
  }

}
