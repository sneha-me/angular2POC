import {Component} from '@angular/core';
import { ContactService } from '../ContactComponent/contact.service';
import { Contact, IContact } from '../ContactComponent/contact';

@Component({
	templateUrl: 'app/AllUsersComponent/all.users.component.html',
	providers:[ContactService]
})

export class AllUsersComponent{

	allUsers: any;
	data: boolean = false;

	constructor(private _contactService: ContactService) {
       this._contactService.getContacts()
		.then(contacts => {
			this.allUsers = contacts;
			this.data = true;
			console.log("data contacts in AllUsersComponent" + this.allUsers);
		})
		.catch(error => {
			console.log("data contacts in _allUsers error", error);
			alert(error.Message);
		})
	}
  }
