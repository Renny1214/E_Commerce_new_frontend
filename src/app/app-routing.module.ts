import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontPageComponent } from './front-page/front-page.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserCartComponent } from './user-cart/user-cart.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { HistoryComponent } from './history/history.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { PaymentComponent } from './payment/payment.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { EntrypageComponent } from './entrypage/entrypage.component';

const routes: Routes = [
  
 {path : 'home' , component :FrontPageComponent},
 {path : 'login' , component : LogInComponent},
 {path : 'signup' , component : SignUpComponent},
 {path : 'products' , component : HomePageComponent},
 {path : 'products/id/:id' , component : ProductDetailsComponent},
 {path : 'cart' , component : UserCartComponent},
 {path : 'profile' , component : MyprofileComponent},
 {path : 'history' , component : HistoryComponent},
 {path : 'about' , component : AboutUsComponent},
 {path : 'contact' , component : ContactUsComponent},
 {path : 'terms' , component : TermsConditionsComponent},
 {path : 'wishlist' , component : WishlistComponent},
 {path : 'payment' , component : PaymentComponent},
 {path : 'track' , component : TrackOrderComponent},
 {path : 'entry' , component : EntrypageComponent},
 {path:'',redirectTo: "/home" , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
