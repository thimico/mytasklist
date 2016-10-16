import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';

import { TasksComponent }   from './components/tasks/tasks.component';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule , HttpModule, FormsModule],
  declarations: [ AppComponent , TasksComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }