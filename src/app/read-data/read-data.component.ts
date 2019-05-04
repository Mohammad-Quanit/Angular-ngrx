import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from "@ngrx/store";
import { IData } from 'models/ngrx.model';
import { AppStore } from '../Store/ngrx.store';
import * as DataActions from '../Actions/ngrx.action';

@Component({
  selector: 'app-read-data',
  templateUrl: './read-data.component.html',
  styleUrls: ['./read-data.component.sass']
})
export class ReadDataComponent implements OnInit {

  data: Observable<IData[]>;

  constructor(private store: Store<AppStore>) {
    this.data = store.select('data');
  }

  ngOnInit() {
    this.data.forEach(data => console.log(data));
  }

  removeData(i) {
    this.store.dispatch(new DataActions.RemoveData(i));
  }
}
