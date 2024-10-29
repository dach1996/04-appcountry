import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private readonly apiRul: string = 'https://restcountries.com/v3.1';
    constructor(private readonly httpClient: HttpClient) { }

    searchByCode(code: string): Observable<Country | null> {
        return this.httpClient.get<Country[]>(`${this.apiRul}/alpha/${code}`)
            .pipe(
                map(map => map.length > 0 ? map[0] : null),
                catchError(() => of(null))
            )
    }

    searchCapital(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.apiRul}/capital/${term}`)
            .pipe(
                catchError(() => of([]))
            )
    }

    searchCountry(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.apiRul}/name/${term}?fullText=true`)
            .pipe(
                catchError(() => of([]))
            )
    }

    searchRegion(term: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.apiRul}/region/${term}`)
            .pipe(
                catchError(() => of([]))
            )
    }

}