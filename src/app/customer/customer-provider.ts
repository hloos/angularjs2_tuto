import { Http, Response } from '@angular/http'
import { Customer } from '../../model/Customer'
import { Injectable } from '@angular/core'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class CustomerProvider {

    constructor(private http: Http) {}

    provideCustomers(): Promise<Customer[]> {
        //http returns by default an observable not a promise. That's why we need to import Promise
        return this.http.get('customer.json')
        .toPromise()
        .then((response: Response) => response.json().data as Customer[]  )
        .catch((reason) => { throw { errCode: 1, errMsg: 'Ajax error' }})
    }
}

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class CustomerProvider2 {
  private customerUrl = './customer.json';  // URL to web API
  constructor (private http: Http) {}

  provideCustomers(): Observable<Customer[]> {
    return this.http.get(this.customerUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(response: Response) {
    let body = response.json();
    return body.data || { };
  }
  
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}