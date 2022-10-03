import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { RouterModule } from '@angular/router';
import { ContentComponent } from './content.component';



@NgModule({
  declarations: [
  
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    ServicesComponent,
    ContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class ContentModule { }
