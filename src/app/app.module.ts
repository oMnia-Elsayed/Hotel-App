import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccomodationComponent } from './Components/Features/accomodation/accomodation.component';
import { RoomsComponent } from './Components/Features/Accomodation/rooms/rooms.component';
import { FoodBeverageComponent } from './Components/Features/food-beverage/food-beverage.component';
import { RestaurantComponent } from './Components/Features/food-beverage/restaurant/restaurant.component';
import { BarsComponent } from './Components/Features/food-beverage/bars/bars.component';
import { LifestyleComponent } from './Components/Features/lifestyle/lifestyle.component';
import { WelnessSpaComponent } from './Components/Features/lifestyle/welness-spa/welness-spa.component';
import { ResortActivitiesComponent } from './Components/Features/lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './Components/Features/lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './Components/Features/lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './Components/Features/weddings/weddings.component';
import { ThaiWeddingsComponent } from './Components/Features/weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './Components/Features/weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './Components/Features/celebrations/celebrations.component';
import { OffersComponent } from './Components/Features/offers/offers.component';
import { AuthComponent } from './Components/Features/auth/auth.component';
import { SigninComponent } from './Components/Features/auth/signin/signin.component';
import { SignupComponent } from './Components/Features/auth/signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    AccomodationComponent,
    RoomsComponent,
    FoodBeverageComponent,
    RestaurantComponent,
    BarsComponent,
    LifestyleComponent,
    WelnessSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
