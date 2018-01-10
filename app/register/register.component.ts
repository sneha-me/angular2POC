import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../_services/index';

@Component({
    templateUrl: 'app/register/register.component.html'
})

export class RegisterComponent {
    model: any = {};
    loading = false;
	errMessage : string;
	showErrMessage: boolean;

    constructor(
        private router: Router,
        private userService: UserService) { }

    register() {
        this.loading = true;
        this.userService.create(this.model)
            .subscribe(
                data => {
                    console.log('Registration successful', true);
                    this.router.navigate(['home']);
                },
                error => {
                    console.log(error);
					this.loading = false;
					this.showErrMessage = true;
					this.errMessage = error;
                    
                });
    }
}
