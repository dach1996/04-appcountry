import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-table',
  styles:[`img {
    width: 25px
  }`],
  templateUrl: './countryTable.component.html',
})
export class CountryTableComponent {

  @Input()
  public countries: Country[] = [];

}
