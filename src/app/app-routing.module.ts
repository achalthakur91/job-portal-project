import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientsComponent } from './clients/clients.component';
import { ContactComponent } from './contact/contact.component';
import { EmployersComponent } from './employers/employers.component';
import { RegisterComponent } from './register/register.component';
import { JobsComponent } from './jobs/jobs.component';

const routes: Routes = [
  
    
      {
        path:'',component:HomepageComponent
      },
      {
        path:'about',component:AboutComponent
      },
      {
        path:'client',component:AboutComponent
      },
      {
        path:'contact',component:AboutComponent
      },
      {
        path:'profile',component:EmployersComponent
      },
      {
        path:'register',component:RegisterComponent
      },
      {
        path:'services',component:AboutComponent
      }
    
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
