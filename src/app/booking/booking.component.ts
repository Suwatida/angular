import { Component } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {
  numRows: number[] = [1, 2, 3, 4, 5, 6];

  rowASeats: string[] = ["A1", "A2", "A3", "A4", "A5", "A6"];
  rowBSeats: string[] = ["B1", "B2", "B3", "B4", "B5", "B6"];

}
