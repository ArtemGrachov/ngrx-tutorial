import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { ICustomer } from '../customer.interface';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http: HttpClient) { }

  private customersUrl: string = 'http://localhost:3000/customers';

  public getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(this.customersUrl);
  }

  public getCustomerById(payload: number): Observable<ICustomer> {
    return this.http.get<ICustomer>(`${this.customersUrl}/${payload}`);
  }

  public createCustomer(payload: ICustomer): Observable<ICustomer> {
    return this.http.post<ICustomer>(
      `${this.customersUrl}`,
      payload
    );
  }

  public updateCustomer(payload: ICustomer): Observable<ICustomer> {
    return this.http.patch<ICustomer>(
      `${this.customersUrl}/${payload.id}`,
      payload
    );
  }

  public deleteCustomer(payload: number): Observable<any> {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}