import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharepage/navbar/navbar.component';
import { FooterComponent } from './sharepage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { SignupComponent } from './pages/signup/signup.component';
import { CartComponent } from './pages/cart/cart.component';
import { ReactiveFormsModule } from '@angular/forms';
=======
>>>>>>> c70eea797accc5162ca9d34001844cd1a2508d10


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    ContactComponent,
<<<<<<< HEAD
    LoginComponent,
    SignupComponent,
    CartComponent,
=======
    LoginComponent
>>>>>>> c70eea797accc5162ca9d34001844cd1a2508d10
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
    
    
  ],
  providers: [
    provideClientHydration()
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
