import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {

  @Input() color: string;
  @Input() percentage: number;

  public gradient: string;

  constructor() {}

  ngOnInit() {
    if (this.color === 'blue') {
      this.gradient = 'linear-gradient(#63b7f5, #539cd1)';
    } else if (this.color === 'yellow') {
      this.gradient = 'linear-gradient(#f0e55f, #d5cc54)';
    } else if (this.color === 'green') {
      this.gradient = 'linear-gradient(#60f594, #4fb974)';
    }
  }

}
