import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './Reducers/ngrx.reducer';
import { CreateDataComponent } from './create-data/create-data.component';
import { ReadDataComponent } from './read-data/read-data.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDataComponent,
    ReadDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      data: reducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
