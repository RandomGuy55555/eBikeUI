export interface BikeDto {
  bikeId: number;
  name: string;
  latitude: string;
  longitude: string;
  rented: boolean;
}

export interface BikeReservationDto {
  username: string;
  bikeId: number;
}