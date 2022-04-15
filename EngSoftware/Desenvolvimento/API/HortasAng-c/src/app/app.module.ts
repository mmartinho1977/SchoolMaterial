import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule} from '@angular/common/http';  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZonaComponent } from './zona/zona.component';
import { ZonaService } from './zona.service';  

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ZonasComponent } from './zonas/zonas.component';
import { ZonasService } from './zonas.service';
//import { RouterModule, Routes } from '@angular/router';


//const appRoutes: Routes = [{path: '', component: ZonasComponent}];

@NgModule({
  declarations: [
    AppComponent,
    ZonaComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ZonasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //RouterModule.forRoot(appRoutes)
  
    

  ],
  providers: [ZonaService],
  //providers: [HttpClientModule,ZonasService, ZonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
