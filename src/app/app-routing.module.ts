import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Urls } from './app-routing.enums';
import { BikeReservationComponent } from './modules/features/bike-reservation/bike-reservation.component';
import { BikesComponent } from './modules/features/bikes/bikes.component';
import { HomeComponent } from './modules/features/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: Urls.HomeUrl,
    component: HomeComponent,
  },
  {
    path: Urls.Ebikes,
    component: BikesComponent,
  },
  {
    path: Urls.RentedEbikes,
    component: BikeReservationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
