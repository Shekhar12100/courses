import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MonthlyComponent } from './components/monthly/monthly.component';
import { YearlyComponent } from './components/yearly/yearly.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { RoundNumberPipe } from './shared/pipes/round-number.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MonthlyComponent,
    YearlyComponent,
    TabsComponent,
    PagenotfoundComponent,
    RoundNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
