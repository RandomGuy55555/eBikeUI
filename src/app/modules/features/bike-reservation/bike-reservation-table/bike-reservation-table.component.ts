import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Bike } from 'src/app/models/bikes/bike';
import { deleteBikeReservation } from 'src/app/store/actions/rentedBikes.action';
import { AppState } from 'src/app/store/state/app.state';
import { BikeReservationDto } from '../../bikes/bikes.dto';

@Component({
  selector: 'bike-reservation-table',
  templateUrl: './bike-reservation-table.component.html',
  styleUrls: ['./bike-reservation-table.component.scss']
})
export class BikeReservationTableComponent {
  @Input() public rentedBikes: Bike[];
  public header: string = 'Rented eBikes';


  public displayedColumns: string[] = [
    'bikeId',
    'name',
    'Return Option',
  ];

  constructor(private store: Store<AppState>) { 
  }

  public returnBike() {
    console.log("returning Bike")
    let bikeReservatonDTO : BikeReservationDto = {
      username: "userOne",
      bikeId: this.rentedBikes[0].bikeId, // there is only one bike in the table
    }
    this.store.dispatch(deleteBikeReservation({ payload: bikeReservatonDTO }));
  }


}
