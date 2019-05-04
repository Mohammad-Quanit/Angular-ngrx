import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import { IData } from 'models/ngrx.model';
import { AppStore } from '../Store/ngrx.store';
import * as DataActions from '../Actions/ngrx.action';

@Component({
  selector: 'app-create-data',
  templateUrl: './create-data.component.html',
  styleUrls: ['./create-data.component.sass']
})
export class CreateDataComponent implements OnInit {

  constructor(private store: Store<AppStore>) { }

  ngOnInit() {
  }

  addData(name: string, age: number, url: string) {
    this.store.dispatch(new DataActions.AddData({ name, age, url }))
  }
}
