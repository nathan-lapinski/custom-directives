import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public trappedBoxes: string[] = [
    'Trapped 1',
    'Trapped 2'
  ];

  private counter = 3;

  add(): void {
    this.trappedBoxes.push('Trapped ' + this.counter++);
  }
}
