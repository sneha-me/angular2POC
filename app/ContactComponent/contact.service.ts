import {Injectable} from '@angular/core';
import { CommonService } from '../Shared/common.service';


@Injectable()
export class ContactService{
	_connection;
	constructor(service: CommonService) {
		this._connection = service._connection;
	}
	
	getContacts = function () {
    // jsstore returns promise, when you dont specify OnSuccess
    return this._connection.select({
      From: 'User'
    })
	}

	addContact = function (Details) {
    return this._connection.insert({
      Into: 'User',
      Values: [Details]
    })
  }

  getContact = function (contactId) {
    return this._connection.select({
      From: 'User',
      Where: {
        Id: contactId
      }
    });
  }

}

