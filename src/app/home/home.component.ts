import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // import Router
import { BookingComponent } from '../booking/booking.component';
import { BookingModule } from '../booking/booking.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  theaters: any[];
  movieTimes: string[];
  selectedTheater: string | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any[]>('https://cpsu-test-api.herokuapp.com/api/camt2023/theaters').subscribe(data => {
      this.theaters = data;
    });

    this.http.get<string[]>('https://cpsu-test-api.herokuapp.com/api/camt2023/shows').subscribe(data => {
      this.movieTimes = data;
    });
  }

  changeTheater(newTheatre?: string) {
    this.selectedTheater = newTheatre;
  }

  changeTime(time: string) {

    this.router.navigate(['/booking'], { queryParams: { time: time } });
  }
}
