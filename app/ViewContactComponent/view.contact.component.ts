import {Component} from '@angular/core';
import { ContactService } from '../ContactComponent/contact.service';
import { Contact, IContact } from '../ContactComponent/contact';

@Component({
	templateUrl: 'app/ViewContactComponent/view.contact.component.html',
	providers:[ContactService]
})

export class ViewContactComponent{
	
	_details;
	_detailsLatest;
	len: number;
	dataAvailable: boolean = false;

	constructor(private _contactService: ContactService) {
       this._contactService.getContacts()
		.then(contacts => {
			this._details = contacts;
			this.len = this._details.length;
			console.log("len;;;", this.len);
			this._detailsLatest = this._details[this.len];
			this.dataAvailable = true;
			console.log("data contacts in ViewContactComponent" + this._details);
		})
		.catch(error => {
			console.log("data contacts in ViewContactComponent error", error);
			alert(error.Message);
		})
	}
  }

	

	/* getContacts():void{
		this._contactService.getContacts()
		.then(contacts => {
			this._details = contacts;
			console.log("data contacts in ViewContactComponent" + this._details);
		})
		.catch(error => {
			console.log("data contacts in ViewContactComponent error", error);
			alert(error.Message);
		})
	} */


