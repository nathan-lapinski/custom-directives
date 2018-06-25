import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  onDragStart(event: PointerEvent): void {
    console.log(event);
  }

  onDragMove(event: PointerEvent): void {
    console.log(event);
  }

  onDragEnd(event: PointerEvent): void {
    console.log(event);
  }
}
