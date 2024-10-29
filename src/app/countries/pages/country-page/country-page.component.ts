import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {

  constructor(
    private readonly activeRoute: ActivatedRoute,
    private readonly countriesService: CountriesService,
    private readonly route: Router,
  ) {
  }

  ngOnInit(): void {
    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.countriesService.searchByCode(id))
      )
      .subscribe(
        res => {
          if (!res)
            this.route.navigateByUrl('');
          console.log(res);
        }
      );
  }


}
