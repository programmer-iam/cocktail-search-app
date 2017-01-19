import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchFormComponent } from './ui/search-form/search-form.component';
import { HelloWorldComponent } from './ui/hello-world/hello-world.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    HelloWorldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
