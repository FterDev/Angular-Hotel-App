import { Component } from '@angular/core';
import {Booking} from '../../interfaces/booking';
@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css']
})
export class BookingsComponent {
  constructor(){}
  booking : Booking = {
    id:123,
    name: 'hans muster',
    roomNumber: 20,
    startDate: new Date(),
    endDate: new Date("2023-04-30")
  }
}
