import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { BikesService } from 'src/app/modules/features/bikes/service/bikes.service';
import {
  createBikeReservation,
  createBikeReservationSuccess,
  loadAllBikes,
  loadAllBikesFinished,
} from '../actions/ebikes.actions';

@Injectable()
export class BikesEffects {
  loadBikesEffect$ = createEffect(() =>
    this.action$.pipe(
      ofType(loadAllBikes),
      switchMap(() =>
        this.bikesService
          .getAllBikes()
          .pipe(map((bikes) => loadAllBikesFinished({ payload: bikes })))
      )
    )
  );

  createBikeReservation$ = createEffect(() =>
    this.action$.pipe(
      ofType(createBikeReservation),
      switchMap((payload) =>
        this.bikesService.createBikeReservation(payload.payload).pipe(
          map(() =>
            // backend only returns a message
            createBikeReservationSuccess({ payload: payload.payload })
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
