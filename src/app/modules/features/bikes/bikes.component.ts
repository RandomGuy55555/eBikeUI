import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Bike } from 'src/app/models/bikes/bike';
import { loadAllBikes, resetBikes } from 'src/app/store/actions/ebikes.actions';
import { bikesSelector } from 'src/app/store/selectors/bikes.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.scss'],
})

export class BikesComponent implements OnInit, OnDestroy {
  public bikes$: Observable<Bike[]>;
  
  constructor(private store: Store<AppState>) {
    this.bikes$ = this.store.select(bikesSelector);
  }

  ngOnInit(): void {
    this.getAllBikes()
  }

  getAllBikes() {
    this.store.dispatch(loadAllBikes());
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetBikes());
  }
}
