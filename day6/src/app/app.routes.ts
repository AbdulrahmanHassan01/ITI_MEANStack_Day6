import { Routes } from '@angular/router';
import { ListproductsComponent } from './components/listproducts/listproducts.component';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ListproductsComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'contact', component: ContactusComponent },
    { path: '**', component: PageNotFoundComponent },
];
