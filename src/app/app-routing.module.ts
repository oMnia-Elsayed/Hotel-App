import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { AccomodationComponent } from './Components/Features/accomodation/accomodation.component';
import { SigninComponent } from './Components/Features/auth/signin/signin.component';
import { SignupComponent } from './Components/Features/auth/signup/signup.component';
import { CelebrationsComponent } from './Components/Features/celebrations/celebrations.component';
import { FoodBeverageComponent } from './Components/Features/food-beverage/food-beverage.component';
import { LifestyleComponent } from './Components/Features/lifestyle/lifestyle.component';
import { OffersComponent } from './Components/Features/offers/offers.component';
import { WeddingsComponent } from './Components/Features/weddings/weddings.component';


const routes: Routes = [
  { path: 'accomodation', component: AccomodationComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'celebrations', component: CelebrationsComponent },
  { path: 'food-beverage', component: FoodBeverageComponent },
  { path: 'lifestyle', component: LifestyleComponent },
  { path: 'offers', component: OffersComponent },
  { path: 'weddings', component: WeddingsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
