import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ZonaComponent } from './zona/zona.component';
import { HomeComponent } from './home/home.component';
import { ZonasComponent } from './zonas/zonas.component';

const routes: Routes = [
  //{path:'', redirectTo:'home', pathMatch:'full'},
  //{path:  "", pathMatch:  "full",redirectTo:  "home"},
  //{path: "home", component: HomeComponent},
  //{path: "zona", component: ZonaComponent},
  //{path: "contact-list", component: ContactListComponent} ,
  {path:'', redirectTo:'zona', pathMatch:'full'},
  {path:'zona', component:ZonasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

