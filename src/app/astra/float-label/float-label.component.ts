import { Component, OnInit } from '@angular/core';

import { CountryService } from '../../service/country.service';

@Component({
  selector: 'app-float-label',
  templateUrl: './float-label.component.html',
})
export class FloatLabelComponent implements OnInit {
  countries: any[];
  cities: any[];
  filteredCountries: any[];
  value1: any;
  value2: any;
  value3: any;
  value4: any;
  value5: any;
  value6: any;
  value7: any;
  value8: any;
  value9: any;
  value10: any;

  constructor(private readonly countryService: CountryService) {}

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];
    this.countryService.getCountries().then((countries) => {
      this.countries = countries;
    });
  }

  searchCountry(event): void {
    //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
    const filtered: any[] = [];
    const query = event.query;
    for (const country of this.countries) {
      // const country = this.countries[i];
      if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
        filtered.push(country);
      }
    }

    this.filteredCountries = filtered;
  }
}
