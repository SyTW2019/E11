import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ShoppingItem } from './store/models/shopping-item.model';
import { AppState } from './store/models/app-state.model';
import { Store } from '@ngrx/store';
import { AddItemAction } from './store/actions/shopping-actions';
import {v4 as uuid } from 'uuid';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	//???????
  title = 'esta prueba fallará';
  users: string[] = ['ps', 'psco'];

}
