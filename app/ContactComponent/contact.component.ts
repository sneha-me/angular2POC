import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { CountryService } from './country.service';

import { IMyDrpOptions } from 'mydaterangepicker';

declare var jQuery: any;

@Component({
    templateUrl: 'app/ContactComponent/contact.component.html',
    styleUrls: ['app/ContactComponent/contact.component.css'],
    providers: [CountryService]
    //pipes: [FilterCountry]
})

export class ContactComponent implements OnInit {

    constructor(private _cService: CountryService, private _router: Router) {
       
    }

    name: string;
    email: string;
    query: string;
    selectedVal: string;

    title: string = "Contact Us";
    countries: any;

    ngOnInit() {
        this._cService.getCountriesList()
            .subscribe(data => {
                this.countries = data;
                console.log("DATAAAA-----", this.countries);
            })        
    }

    ngAfterViewChecked() {
        jQuery('.selectpicker').selectpicker('refresh');
    }

    
    submitQuery(value): void {
        //alert("Your Query Submitted");
        alert("name::::" + value.uname + "\nemail::::" + value.uemail + "\nquery::::" + value.uquery);
   
        console.log(value);
    }

    redirectToHome(): void {
       // alert("home")
        this._router.navigate(['/home']);
    }

    setDropdownValue(val): void{
        this.selectedVal = val;
    }

    myDateRangePickerOptions: IMyDrpOptions = {
        // other options...
        dateFormat: 'dd.mm.yyyy',
    };

    // For example initialize to specific date (09.10.2018 - 19.10.2018). It is also possible
    // to set initial date range value using the selDateRange attribute.
    private model: any = {
        beginDate: { year: 2018, month: 10, day: 9 },
        endDate: { year: 2018, month: 10, day: 19 }
    };
}