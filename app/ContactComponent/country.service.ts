import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
 export class CountryService {
    constructor(private _http: Http) { };

    getCountriesList(): Observable<any> {
        return this._http.get('/app/Shared/country.json')
                .map((response: Response) => {
                    return response.json();
                });
        }
    }
