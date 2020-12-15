import { Component, OnInit } from '@angular/core';

import { Country } from '../../../domain/model';
import { CountryService } from '../../../service/country.service';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styles: [
    `
      :host ::ng-deep .p-multiselect {
        min-width: 15rem;
      }

      :host ::ng-deep .multiselect-custom-virtual-scroll .p-multiselect {
        min-width: 20rem;
      }

      .country-item {
        display: flex;
        align-items: center;
      }

      .country-item img.flag {
        width: 18px;
        margin-right: 0.5rem;
      }

      .country-item-value img.flag {
        width: 17px;
      }
    `,
  ],
})
export class MultiSelectComponent implements OnInit {
  selectedCities1: City[];
  selectedCities2: City[];
  selectedCountries1: Country[];
  selectedCountries2: Country[];
  cities: City[];
  countries: City[];
  virtualCountries: Country[];

  constructor(private readonly countryService: CountryService) {}

  ngOnInit(): void {
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' },
    ];

    this.countries = [
      { name: 'Australia', code: 'AU' },
      { name: 'Brazil', code: 'BR' },
      { name: 'China', code: 'CN' },
      { name: 'Egypt', code: 'EG' },
      { name: 'France', code: 'FR' },
      { name: 'Germany', code: 'DE' },
      { name: 'India', code: 'IN' },
      { name: 'Japan', code: 'JP' },
      { name: 'Spain', code: 'ES' },
      { name: 'United States', code: 'US' },
    ];

    this.countryService.getCountries().then((countries) => {
      this.virtualCountries = countries;
    });
  }
}
