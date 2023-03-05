import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Bike } from 'src/app/models/bikes/bike';
import { createBikeReservation } from 'src/app/store/actions/ebikes.actions';
import { usernameSelector } from 'src/app/store/selectors/user.selector';
import { AppState } from 'src/app/store/state/app.state';
import { BikeReservationDto } from '../bikes.dto';

@Component({
  selector: 'bike-details',
  templateUrl: './bike-details.component.html',
  styleUrls: ['./bike-details.component.scss'],
})
export class BikeDetailsComponent implements OnInit {
  @Input() public bike: Bike;
  @Output() public closeRow = new EventEmitter();

  public idLabel = 'Id';
  public nameLabel = 'Name';
  public latitudeLabel = 'Latitude';
  public longitudeLabel = 'Longitude';
  public rentedLabel = 'Rented';

  public displayedBike: Bike;
  public username: string
  private username$: Observable<string>;
  private usernameObservable: Subscription;
  private loadedBike = false;

  constructor(private store: Store<AppState>) {
    this.username$ = this.store.select(usernameSelector);
  }

  ngOnInit(): void {
    this.setUsername();
  }

  ngOnChanges() {
    if (this.bike && !this.loadedBike) {
      this.createBikeCopy();
    }
  }

  setUsername() {
    this.usernameObservable = this.username$?.subscribe(username => {
      this.username = username
    })
  }

  public editingAllFieldsIsAllowed(): boolean {
    return false;
  }

  public isRented(): boolean {
    return this.displayedBike.rented;
  }

  public closeDetailsRow() {
    this.closeRow.emit();
  }

  public isDeactivatedBike(): boolean {
    return this.displayedBike.rented === true;
  }

  private createBikeCopy() {
    this.displayedBike = { ...this.bike };
    this.loadedBike = true;
  }

  public rentBike() {
    let bikeReservatonDTO : BikeReservationDto = {
      //username: "userOne",
      username: this.username,
      bikeId: this.displayedBike.bikeId
    }
    this.store.dispatch(createBikeReservation({ payload: bikeReservatonDTO }));
  }
}
