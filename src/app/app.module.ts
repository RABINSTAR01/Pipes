import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { VotePipe } from './pipes/vote.pipe';
import { LinkPipe } from './link/link.pipe';

@NgModule({
  declarations: [
    AppComponent,
    VotePipe,
    LinkPipe
    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
