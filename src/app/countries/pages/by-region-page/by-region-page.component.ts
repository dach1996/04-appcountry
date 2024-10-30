import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { Component } from '@angular/core';
type Region = 'America' | 'Africa' | 'Europa'| 'Asia';


@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: ``
})

export class ByRegionPageComponent {

  public countries: Country[] = [];
  public regions: Region[] = ['America', 'Africa', 'Asia'];
  public selectedRegion?: Region;
  constructor(private readonly countriesService: CountriesService) {

  }

   onValue(value: Region): void {

    this.selectedRegion = value;
    this.countriesService.searchRegion(value)
      .subscribe(res => {
        this.countries = res
      });
  }
}
