import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Bike } from 'src/app/models/bikes/bike';
import { loadRentedBike, resetRentedBikes } from 'src/app/store/actions/rentedBikes.action';
import { rentedBikesSelector } from 'src/app/store/selectors/rentedBikes.selector';
import { usernameSelector } from 'src/app/store/selectors/user.selector';
import { AppState } from 'src/app/store/state/app.state';

@Component({
  selector: 'bike-reservation',
  templateUrl: './bike-reservation.component.html',
  styleUrls: ['./bike-reservation.component.scss']
})
export class BikeReservationComponent implements OnInit, OnDestroy {

  public rentedBikes$: Observable<Bike[]>;
  public username: string
  private username$: Observable<string>;
  private usernameObservable: Subscription;

  constructor(private store: Store<AppState>) {
    this.rentedBikes$ = this.store.select(rentedBikesSelector);
    this.username$ = this.store.select(usernameSelector);
  }

  ngOnInit(): void {
    this.setUsername();
    this.getRentedBike()
  }

  setUsername() {
    this.usernameObservable = this.username$?.subscribe(username => {
      this.username = username
    })
  }

  getRentedBike() {
    //this.store.dispatch(loadRentedBike("userOne"));
    console.log("getting rented bike from user " + this.username)
    this.store.dispatch(loadRentedBike(this.username));
  }

  ngOnDestroy(): void {
    this.store.dispatch(resetRentedBikes());
    this.usernameObservable?.unsubscribe();
  }
}
