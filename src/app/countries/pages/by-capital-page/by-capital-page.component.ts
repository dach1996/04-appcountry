import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent {

  public countries: Country[] = [];
  public isLoading: boolean = false;

  constructor(private readonly countriesService: CountriesService) {

  }

  onValue(value: string): void {
    this.isLoading = true;
    this.countriesService.searchCapital(value)
      .subscribe(res => {
        this.countries = res
        this.isLoading = false;

      });

  }
}
