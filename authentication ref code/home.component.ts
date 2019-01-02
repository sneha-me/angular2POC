import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthenticationService } from '../_services/index';
import { DataService } from '../Shared/data.service';

/* @Component({
    template: `<img src='app/shared/stack-of-books-d-background.jpg' alt="stack of books" />
                <h3 class="welcome">{{ 'welcomeText' | translate }}</h3>
                `,
    styles: ['img{position: absolute; left: 30%; top: 35%}',
        '.welcome{font-size: 39px; top: 45%; position: absolute;left: 50%;}'  
    ]
})  */

@Component({
	templateUrl: 'app/HomeComponent/home.component.html',
	providers: [DataService]
})

export class HomeComponent implements OnInit {
	loading = false;
    returnUrl: string;
	err: any;
	message: boolean;

	constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
		private data : DataService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
		this.data.currentMessage.subscribe(message => this.message = message)
		
    }

	login(value, $event) {
		$event.preventDefault();
        this.loading = true;
		let username = value.username;
		let password = value.pwd;
        this.authenticationService.login(username, password)
            .subscribe(
                data => {
					console.log("authenticated user");
					this.data.changeMessage(true);
					this.data.currentMessage.subscribe(value => console.log("value==", value));
                    this.router.navigate(['dashboard', 123]);
                },
                error => {
                    this.loading = false;
					this.err = error;
                });
    }

}