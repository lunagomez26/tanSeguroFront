import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './Components/menu/menu.component';
import { FooterComponent } from './Components/footer/footer.component';
import { AboutUsComponent } from './Components/about-us/about-us.component';
import { PqrsComponent } from './Components/pqrs/pqrs.component';
import { ContactComponent } from './Components/contact/contact.component';
import { HomeComponent } from './Components/home/home.component';
import { HogarDeudorComponent } from './Components/hogar-deudor/hogar-deudor.component';
import { HogarDeudorOfertaComponent } from './Components/hogar-deudor-oferta/hogar-deudor-oferta.component';

const routesApp: Routes =[
  {path: '', component: HomeComponent },
  {path: 'aboutUs', component: AboutUsComponent},
  {path: 'pqrs', component:PqrsComponent},
  {path: 'contact', component:ContactComponent},
  {path: 'hogarDeudor', component: HogarDeudorComponent},
  {path: 'hogarDeudorOferta', component: HogarDeudorOfertaComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AboutUsComponent,
    PqrsComponent,
    ContactComponent,
    HomeComponent,
    HogarDeudorComponent,
    HogarDeudorOfertaComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routesApp)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
