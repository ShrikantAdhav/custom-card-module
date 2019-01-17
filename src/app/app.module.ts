import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CustomCardModule } from './custom-card-module/custom-card.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CustomCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
