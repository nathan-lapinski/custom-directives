import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DraggableModule } from './draggable/draggable.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
