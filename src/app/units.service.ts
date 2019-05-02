import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Unit } from './unit';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  getUnits(faction): Observable<Unit[]> {
    return this.http.get<Unit[]>('https://thetrolltrader.com:3001/units/'+faction.name)
  }

  constructor( 
    private http: HttpClient,
    ) { }
}
