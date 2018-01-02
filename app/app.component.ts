import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/core';
import { TranslateService } from 'ng2-translate';


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
    ]
})

export class AppComponent {

    constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr", "cn", "hi"]);
        translate.setDefaultLang("en");

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }

    menuState: string = 'out';
    show: boolean;
    applyClass1: boolean;
    applyContactClass: boolean;
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