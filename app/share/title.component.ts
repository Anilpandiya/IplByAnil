import { Component, Input,  OnChanges } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnChanges {

  starWidth : number;
  @Input() rating : number;
  constructor() { }

  ngOnChanges(): void {
        this.starWidth = this.rating * 76 / 5;
    }

}