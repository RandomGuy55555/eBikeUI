import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bike } from 'src/app/models/bikes/bike';
import { BikeDto, BikeReservationDto } from '../bikes.dto';

@Injectable({
  providedIn: 'root',
})
export class BikesService {
  constructor(private readonly http: HttpClient) {}

  getAllBikes(): Observable<BikeDto[]> {
    let path = 'http://localhost:8080/bikes/';
    return this.http.get<BikeDto[]>(path);
  }

  getBikeReservation(username: string): Observable<any> {
    console.log("I am loading bike Reservations")
    const getBikeReservationPath = 'http://localhost:8080/reservation?user=' + username;
    return this.http.get<BikeDto[]>(getBikeReservationPath);
  }

  createBikeReservation(newBikeReservation: BikeReservationDto): Observable<any> {
    const createBikereservationPath = 'http://localhost:8080/reservation/';
    return this.http.post(createBikereservationPath, newBikeReservation);
  }

  deleteBikeReservation(bikeReservation: BikeReservationDto): Observable<any> {
    console.log("I am in the deleteService")
    const deleteBikereservationPath = 'http://localhost:8080/reservation/bike/' + bikeReservation.bikeId;
    return this.http.delete(deleteBikereservationPath);
  }
}
