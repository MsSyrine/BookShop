import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// Components
import { ContactComponent } from './components/contact/contact.component';
import { ShopingCartComponent } from './components/shoping-cart/shoping-cart.component';
import { SearchComponent } from './components/search/search.component';
import { BookComponent } from './components/book/book.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { PrivatePageComponent } from './components/Admin/private-page/private-page.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/footer/faq/faq.component';

// FireBase Connection
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
// Pipe
import { FilterPipe } from './pipes/filter.pipe';
// Service
import { AuthService } from './services/auth.service';
import { AddCartService } from './services/add-cart.service';
import { SearchService } from './services/search.service';
import { BookService } from './services/book.service';
import { PetitionsService } from './services/petitions.service';
import { AddBookComponent } from './components/Admin/add-book/add-book.component';
import { RmBookComponent } from './components/Admin/rm-book/rm-book.component';
import { ErrorComponent } from './components/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    ShopingCartComponent,
    MainComponentComponent,
    SearchComponent,
    FilterPipe,
    LoginComponent,
    RegisterComponent,
    PrivatePageComponent,
    BookComponent,
    FaqComponent,
    AddBookComponent,
    RmBookComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    appRoutingProviders,
    AuthService,
    BookService,
    SearchService,
    PetitionsService,
    AddCartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
