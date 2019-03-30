import { ErrorComponent } from './components/error/error.component';
import { AddBookComponent } from './components/Admin/add-book/add-book.component';
import { FaqComponent } from './components/footer/faq/faq.component';
import { PrivatePageComponent } from './components/Admin/private-page/private-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './components/search/search.component';
import { BookComponent } from './components/book/book.component';
import { RmBookComponent } from './components/Admin/rm-book/rm-book.component';



// array of routes

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'Home', component: HomeComponent},
    {path: 'Contact', component: ContactComponent},
    {path: 'ShopingCart', component: ShopingCartComponent},
    {path: 'Register', component: RegisterComponent},
    {path: 'Login', component: LoginComponent},
    {path: 'PrivatePage', component: PrivatePageComponent},
    {path: 'searchBook', component: SearchComponent },
    {path: 'BookList', component: BookComponent},
    {path: 'Faq', component: FaqComponent},
    {path: 'Private', component: PrivatePageComponent},
    {path: 'PrivatePage/Addbook', component: AddBookComponent},
    {path: 'PrivatePage/RemoveBook', component: RmBookComponent},
    {path: '**', component: ErrorComponent}
    // route 404

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
