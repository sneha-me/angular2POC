import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { CountryService } from './country.service';

import { IMyDrpOptions } from 'mydaterangepicker';

import { ContactService } from './contact.service';
import { Contact, IContact } from './contact';


declare var jQuery: any;

@Component({
    templateUrl: 'app/ContactComponent/contact.component.html',
    styleUrls: ['app/ContactComponent/contact.component.css'],
    providers: [CountryService, ContactService]
    //pipes: [FilterCountry]
})

export class ContactComponent implements OnInit {
	
    constructor(private _cService: CountryService, private _router: Router, private _contactService: ContactService) {
       
    }

    name: string;
    email: string;
    query: string;
	country: string;
    selectedVal: string;
	userDetails: any;

	_contacts: Array<Contact> = [];

    title: string = "Contact Us";
    countries: any;

    ngOnInit() {
        this._cService.getCountriesList()
            .subscribe(data => {
                this.countries = data;
                console.log("DATAAAA-----", this.countries);
            }) 
		
		this.getContacts();
    }

    ngAfterViewChecked() {
        jQuery('.selectpicker').selectpicker('refresh');
    }

    
    submitQuery(value, $event): void {
		$event.preventDefault();
        //alert("Your Query Submitted");
        alert("name::::" + value.uname + "\nemail::::" + value.uemail + "\nquery::::" + value.uquery);
   
        console.log(value);
		this.userDetails = {
			Name: value.uname,
			Email: value.uemail,
			Query: value.uquery,
			Country: value.ucountry			
		}

		this._contactService.addContact(this.userDetails)
			.then(data => {
				console.log("Add data", data); //data = 1
				console.log("record added"); alert("one record added");
				this._router.navigate(['/viewContact']);

			})
			.catch(error => {
				console.log("Add Error" ,error);
				alert(error.Message);
		})
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

	getContacts():void{
		this._contactService.getContacts()
		.then(contacts => {
			this._contacts = contacts;
			console.log("data contacts" + this._contacts);
		})
		.catch(error => {
			console.log(error);
			alert(error.Message);
		})
	}
}