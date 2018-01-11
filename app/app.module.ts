import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRouterModule } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { DatePickerModule } from 'ng2-datepicker';
import { MyDateRangePickerModule } from 'mydaterangepicker';
import { TranslateModule, TranslateService } from 'ng2-translate';
import { CommonService } from './Shared/common.service';

import { AuthGuard } from './_guards/index';
import { JwtInterceptor } from './_helpers/index';
import { AuthenticationService, UserService } from './_services/index';
import { fakeBackendProvider } from './_helpers/index';

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
import { RegisterComponent } from './register/index';


@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, BrowserAnimationsModule, HttpClientModule,
        AppRouterModule,
        MyDateRangePickerModule,
        TranslateModule.forRoot()],
       
    declarations: [AppComponent, HomeComponent, DashboardComponent, RegisterComponent,
        AboutComponent, ContactComponent, PageNotFoundComponent, FilterCountry,
        AutoCompleteComponent, ViewContactComponent, AllUsersComponent],
   	providers: [
		TranslateService,
		CommonService,
        AuthGuard,
        AuthenticationService,
        UserService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})

export class AppModule{}