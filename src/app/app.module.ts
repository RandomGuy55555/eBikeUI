import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { BikeTableComponent } from './modules/features/bikes/bike-table/bike-table.component';
import { BikeDetailsComponent } from './modules/features/bikes/bike-details/bike-details.component';
import { BikesComponent } from './modules/features/bikes/bikes.component';
import { HomeComponent } from './modules/features/home/home.component';
import { StoreModule } from '@ngrx/store';
import { bikesReducer } from './store/reducers/bikes.reducers';
import { MatTableModule } from '@angular/material/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { BikesEffects } from './store/effects/bikes.effects';
import { RentedBikesEffects } from './store/effects/rentedBikes.effects';
import { rentedBikesReducer } from './store/reducers/rentedBikes.reducer';
import { BikeReservationComponent } from './modules/features/bike-reservation/bike-reservation.component';
import { BikeReservationTableComponent } from './modules/features/bike-reservation/bike-reservation-table/bike-reservation-table.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { usersReducer } from './store/reducers/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    BikeTableComponent,
    BikeDetailsComponent,
    BikesComponent,
    HomeComponent,
    BikeReservationComponent,
    BikeReservationTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSlideToggleModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    EffectsModule.forRoot([BikesEffects, RentedBikesEffects]),
    StoreModule.forRoot({
      bikes: bikesReducer,
      rentedBikes: rentedBikesReducer,
      user: usersReducer
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
