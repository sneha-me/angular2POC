import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { TranslateService } from 'ng2-translate';
import { DataService } from './Shared/data.service';


@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
     animations: [
        trigger('slideInOut', [
            state('in', style({
                transform: 'translate3d(0, 0, 0)'
            })),
            state('out', style({
                transform: 'translate3d(-195px, 0, 0)'
            })),
            transition('in => out', animate('1000ms ease-in-out')),
            transition('out => in', animate('1000ms ease-in-out'))
        ]),
    ],
    providers: [DataService]
})

export class AppComponent implements OnInit{

    constructor(private translate: TranslateService, private data: DataService) {
        translate.addLangs(["en", "fr", "cn", "hi"]);
        translate.setDefaultLang("en");

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

	ngOnInit(){
		this.data.currentMessage.subscribe(message => this.message = message)
	}

    menuState: string = 'out';
    show: boolean;
    applyClass1: boolean;
	message: boolean;
    applyContactClass: boolean;
	showIcon: boolean;
	userValid: string;
    //applyContactClass = 'contactClass';

    toggleMenu() {
        
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        if (this.menuState === 'in') {
            this.applyClass1 = true;
            this.applyContactClass = false;
       }
        if (this.menuState === 'out'){
            this.applyContactClass = true;
            this.applyClass1 = false;
       }
        
        
    }

    addClasses() {
        let classes = {
            class1: this.applyClass1,
            contactClass: this.applyContactClass
        };

        return classes;
    }
    toggleContactMenu() {
        this.menuState = this.menuState === 'out' ? 'in' : 'out';
        this.applyContactClass = true;
        this.applyClass1 = false;
    }

    changeLanguage(lang): void {
        this.translate.use(lang);
    }
}