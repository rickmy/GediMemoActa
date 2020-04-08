import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ServicioService } from "./servicio.service";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VisualizadorComponent } from './visualizador/visualizador.component';
import { ElaboradorComponent } from './elaborador/elaborador.component';
import { LoginComponent } from "./login/login.component";
import { RegistrationComponent } from './registration/registration.component';
import { HttpClientModule} from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbThemeModule } from '@nebular/theme';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from  '@angular/material/toolbar';
import { MatButtonModule } from  '@angular/material/button';
import { MatCardModule, MatCardContent } from  '@angular/material/card';
import { MatFormFieldModule, MatFormField } from  '@angular/material/form-field';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarComponent } from './navbar/navbar.component';
import { DatePipe } from '@angular/common';
import { ActasComponent } from './elaborador/actas/actas.component';
import { MemorandumsComponent } from './elaborador/memorandums/memorandums.component';
import { OficiosComponent } from './elaborador/oficios/oficios.component';
import { SolicitudesComponent } from './elaborador/solicitudes/solicitudes.component';
import { HojaDeVidaComponent } from './elaborador/hoja-de-vida/hoja-de-vida.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { ActasReunionesComponent } from './elaborador/actas-reuniones/actas-reuniones.component';
=======
import { FormsModule } from '@angular/forms';
import { MemorandumsComponent } from './elaborador/memorandums/memorandums.component';
import { ActasComponent } from './elaborador/actas/actas.component';
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f


@NgModule({
  declarations: [
    AppComponent,
    VisualizadorComponent,
    ElaboradorComponent,
<<<<<<< HEAD
    LoginComponent,
    RegistrationComponent,
    NavbarComponent,
    ActasComponent,
    MemorandumsComponent,
    OficiosComponent,
    SolicitudesComponent,
    HojaDeVidaComponent,
    ActasReunionesComponent
=======
    MemorandumsComponent,
    ActasComponent
>>>>>>> 5c2f9c5d12195cb0498c7c0d337f6a618a339f6f
  ],
  imports: [
    BrowserModule,
    NbThemeModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    AutocompleteLibModule
  ],
  providers: [ServicioService, DatePipe],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
