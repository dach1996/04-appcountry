import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private readonly apiRul: string = 'https://restcountries.com/v3.1';
    constructor(private readonly httpClient: HttpClient) { }

    searchCapital(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.apiRul}/capital/${term}`);
    }

}