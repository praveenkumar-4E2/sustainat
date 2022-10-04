import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';
import { ContactComponent } from './components/contact/contact.component';
import { SustainabilityComponent } from './components/sustainability/sustainability.component';



@NgModule({
  declarations: [
  
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ServicesComponent,
    ContentComponent,
    ContactComponent,
    SustainabilityComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ContentModule { }
