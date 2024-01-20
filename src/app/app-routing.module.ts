import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
<<<<<<< HEAD
import { SignupComponent } from './pages/signup/signup.component';
import { CartComponent } from './pages/cart/cart.component';
=======
>>>>>>> c70eea797accc5162ca9d34001844cd1a2508d10

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent},
<<<<<<< HEAD
  { path: 'signup', component: SignupComponent},
  { path: 'cart', component: CartComponent},
  { path: '', redirectTo:'menu', pathMatch:'full'}
=======
>>>>>>> c70eea797accc5162ca9d34001844cd1a2508d10
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
