import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { ResearchComponent } from './research/research.component';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';
import { AuthenticationGuard } from './authentication.guard';
import { AdminComponent } from './admin/admin.component';
import { ResearchAppComponent } from './research-app/research-app.component';
import { LoginComponent } from './authentication/login/login.component';
import { RegisterComponent } from './authentication/register/register.component';

const routes: Routes = [  
  { path:"", redirectTo: "home", pathMatch: "full" },
  { path:"home", component: HomeComponent },
  { path:"research", component: ResearchComponent},
  { path:"research-app", component: ResearchAppComponent, canActivate: [AuthenticationGuard]},
  { path:"faq", component: FaqComponent},
  { path:"contact", component: ContactComponent},
  { path:"admin", component: AdminComponent, canActivate: [AuthenticationGuard]},
  { path:"login", component: LoginComponent },
  { path:"register", component: RegisterComponent },

  //{ path:"", redirectTo:"/articles", pathMatch: "full" }, 

  // Wild Card Route for 404 request 
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
