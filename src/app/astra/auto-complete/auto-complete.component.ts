import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../service/country.service';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styles: [
    `.country-item {
      display: flex;
      align-items: center;
    }

    .country-item img.flag {
      width: 18px;
      margin-right: 0.5rem;
    }

    .country-item-value img.flag {
      width: 17px;
    }`
  ]
})
export class AutoCompleteComponent implements OnInit {
  selectedCountry: any;
  countries: any[];
  filteredCountries: any[];
  selectedCountries: any[];
  selectedCountryAdvanced: any[];
  filteredBrands: any[];

  constructor(private readonly countryService: CountryService) { }

  ngOnInit(): void {
    this.countryService.getCountries().then(countries => {
      this.countries = countries;
    });
  }

  filterCountry(event) {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    let filtered : any[] = [];
    let query = event.query;
    for(let i = 0; i < this.countries.length; i++) {
      let country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
