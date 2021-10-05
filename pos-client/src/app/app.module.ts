import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { MenuComponentComponent } from './menu-component/menu-component.component';
import { OrderSummaryComponentComponent } from './order-summary-component/order-summary-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponentComponent,
    MenuComponentComponent,
    OrderSummaryComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
