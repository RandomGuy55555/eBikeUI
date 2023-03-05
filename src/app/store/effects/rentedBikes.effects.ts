import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BikesService } from 'src/app/modules/features/bikes/service/bikes.service';
import { deleteBikeReservation, deleteBikeReservationSuccess, loadRentedBike, loadRentedBikeFinished } from '../actions/rentedBikes.action';

@Injectable()
export class RentedBikesEffects {

  loadRentedBikeEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadRentedBike),
      switchMap((payload) =>
        this.bikesService
          .getBikeReservation(payload.username)
          .pipe(map((bikes) => loadRentedBikeFinished({ payload: bikes })))
      )
    )
  );


  deleteBikeReservation$ = createEffect(() =>
    this.action$.pipe(
      ofType(deleteBikeReservation),
      switchMap((payload) =>
        this.bikesService.deleteBikeReservation(payload.payload).pipe(
          map(() =>
            // backend only returns a message
            deleteBikeReservationSuccess({ payload: payload.payload })
          )
        )
      )
    )
  );

  constructor(
    private action$: Actions,
    private bikesService: BikesService //private router: Router
  ) {}
}
