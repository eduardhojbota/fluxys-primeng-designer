import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Customer } from '../domain/model';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  constructor(private http: HttpClient) {}

  getCustomersLarge(): Promise<Customer[]> {
    return this.http
      .get<any>('assets/demo/data/customers-large.json')
      .toPromise()
      .then((res) => res.data as Customer[])
      .then((data) => data);
  }
}
