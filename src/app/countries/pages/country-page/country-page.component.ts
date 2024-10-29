import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  /**
   *
   */
  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly countriesService: CountriesService
  ) {
  }
  
  ngOnInit(): void {
    this.activeRoute.params.subscribe(({ id }) => {
      this.countriesService.searchByCode(id).subscribe(res => console.log(res))
    });
  }

}
