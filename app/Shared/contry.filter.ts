import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'countryFilter'
})

export class FilterCountry implements PipeTransform {
    transform(countries: any, term: string): any {
        //check if  search input is defined
        if (term === undefined) { return countries; }

        //if defined, return updated array of countries
        return countries.filter(function (country) {
            return country.name.toLowerCase().includes(term.toLowerCase());
        })
    }
}