import { Injectable } from '@angular/core';
import { BookingModule } from './booking.module';


@Injectable()
export class StaticDataSource {
    private products: booking[] = [

    ];

    getProducts(): Observable<booking[]> {
        return from([this.booking]);
    }

    saveOrder(order: Order): Observable<Order> {
        console.log(JSON.stringify(order));
        return from([order]);
    }
}