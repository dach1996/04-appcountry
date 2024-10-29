import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({ providedIn: 'root' })
export class CountriesService {

    private readonly apiRul: string = 'https://restcountries.com/v3.1';
    constructor(private readonly httpClient: HttpClient) { }

    searchByCode(code: string): Observable<Country[]> {
        return this.httpClient.get<Country[]>(`${this.apiRul}/alpha/${code}`)
            .pipe(
                catchError(() => of([]))
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