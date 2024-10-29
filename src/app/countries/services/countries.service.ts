import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, delay, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private readonly apiRul: string = 'https://restcountries.com/v3.1';
    constructor(private readonly httpClient: HttpClient) { }

    search(url: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(url)
            .pipe(
                catchError(() => of([])),
                delay(2000)
            )
    }

    searchByCode(code: string): Observable<Country | null> {
        return this.httpClient.get<Country[]>(`${this.apiRul}/alpha/${code}`)
            .pipe(
                map(map => map.length > 0 ? map[0] : null),
                catchError(() => of(null))
            )
    }

    searchCapital(term: string): Observable<Country[]> {
        return this.search(`${this.apiRul}/capital/${term}`);
    }

    searchCountry(term: string): Observable<Country[]> {
        return this.search(`${this.apiRul}/name/${term}?fullText=true`);
    }

    searchRegion(term: string): Observable<Country[]> {
        return this.search(`${this.apiRul}/region/${term}`);
    }

}