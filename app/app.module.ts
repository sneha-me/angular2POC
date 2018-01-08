﻿import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
//import { DatePickerModule } from 'ng2-datepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { TranslateModule, TranslateService } from 'ng2-translate';
import { CommonService } from './Shared/common.service';



import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home.component';
import { DashboardComponent } from './DashboardComponent/dashboard.component';
import { AboutComponent } from './AboutComponent/about.component';
import { ContactComponent } from './ContactComponent/contact.component';
import { PageNotFoundComponent } from './PageNotFoundComponent/pageNotFound.component';
import { FilterCountry } from './Shared/contry.filter';
import { AutoCompleteComponent } from './AutoCompleteComponent/autocomplete.component';
import { ViewContactComponent } from './ViewContactComponent/view.contact.component';
import { AllUsersComponent } from './AllUsersComponent/all.users.component';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
        AppRouterModule,
        MyDateRangePickerModule,
        TranslateModule.forRoot()],
       
    declarations: [AppComponent, HomeComponent, DashboardComponent,
        AboutComponent, ContactComponent, PageNotFoundComponent, FilterCountry,
        AutoCompleteComponent, ViewContactComponent, AllUsersComponent],
    providers: [TranslateService, CommonService],
    bootstrap: [AppComponent]
})

export class AppModule{}