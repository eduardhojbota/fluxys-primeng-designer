import { Component, OnInit } from '@angular/core';

import { Country } from '../../../domain/model';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-listbox',
  templateUrl: './listbox.component.html',
  styles: [
    `
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
export class ListboxComponent implements OnInit {
  cities: City[];
  countries: Country[];
  selectedCity: City;
  selectedCountries: Country[];

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
  }
}
