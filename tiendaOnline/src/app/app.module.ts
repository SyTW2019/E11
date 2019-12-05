import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule} from  '@angular/material';
import { MatMenuModule} from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product.component';
import { UserListComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { DataServiceService } from './data-service.service';
import { SigninComponent } from './signup/signin.component';
import { InComponent } from './in/in.component';

const routes: Route[] = [
  {path: '', component: TopBarComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SigninComponent},
  { path: 'user', component: PerfilUsuarioComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UserListComponent,
    MenuComponent,
    LoginComponent,
    TopBarComponent,
    PerfilUsuarioComponent,
    SigninComponent,
    InComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
