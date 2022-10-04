import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/content/components/about/about.component';
import { ContactComponent } from './modules/content/components/contact/contact.component';
import { HomeComponent } from './modules/content/components/home/home.component';
import { ProductsComponent } from './modules/content/components/products/products.component';
import { ServicesComponent } from './modules/content/components/services/services.component';
import { SustainabilityComponent } from './modules/content/components/sustainability/sustainability.component';
import { ContentComponent } from './modules/content/content.component';

const routes: Routes = [
  
    {
      path: '', redirectTo: '/content/home', pathMatch: 'full'
    },
   
    {
      path: 'content', component: ContentComponent, children:
        [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'about',
            component: AboutComponent,
          
          },
          {
            path:'products',
            component:ProductsComponent
          },
          {
            path:'services',
            component:ServicesComponent
          },
          {
            path:'sustainability',
            component:SustainabilityComponent
          },
          {
            path:'contact',
            component:ContactComponent
          }
          
  
        ]
    },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
