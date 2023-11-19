import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wikipedia';

  pages: any = [];
  constructor(private ap: WikipediaService) {

  }

  onSearch(value: string) {
    console.log(value)
    this.ap.onSearch(value).subscribe((vada) => {
      console.log(vada);
      this.pages = vada;
      console.log(this.pages);
      this.pages=this.pages.query.search;
      console.log(this.pages);
    });
  }
}
