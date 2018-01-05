import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './HomeComponent/home.component';
import { DashboardComponent } from './DashboardComponent/dashboard.component';
import { AboutComponent } from './AboutComponent/about.component';
import { ContactComponent } from './ContactComponent/contact.component';
import { PageNotFoundComponent } from './PageNotFoundComponent/pageNotFound.component';
import { ViewContactComponent } from './ViewContactComponent/view.contact.component';
import { AllUsersComponent } from './AllUsersComponent/all.users.component';


const routes: Routes = [
    { path: 'dashboard/:id', component: DashboardComponent },
    { path: 'contact', component: ContactComponent },
	{ path: 'viewContact', component: ViewContactComponent },
    { path: 'about', component: AboutComponent },
	{ path: 'all', component: AllUsersComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/home', pathMatch:'full' },
    { path: '*', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRouterModule {}

