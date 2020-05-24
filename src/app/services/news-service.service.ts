import { Injectable } from '@angular/core';
import { New } from '../models/New';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  news: Array<New> = [];
  constructor() { 
    this.news.push(new New(0,'BANK OF CHINA','/assets/images/news/BANK',3))
    this.news.push(new New(1,'EXPO','/assets/images/news/EXPO',11))
    this.news.push(new New(2,'LAC','/assets/images/news/LAC',9))
    this.news.push(new New(3,'PLENARIA','/assets/images/news/PLENARIA',4))
    this.news.push(new New(4,'RISEN','/assets/images/news/RISEN',2))
  }

  getNewById(id: number){
    var x = this.news.find(x => x.id == id); 
    return x;
  }
}
