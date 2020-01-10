import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule} from  '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatMenuModule} from '@angular/material/menu';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product.component';
import { UserListComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { ShoppingReducer } from './store/reducers/shopping-reducer';
import { PerfilUsuarioComponent } from './perfil-usuario/perfil-usuario.component';
import { SigninComponent } from './signup/signin.component';
import { HomeComponent } from './home/home.component';
import { ProductShowComponent } from './product-show/product-show.component';
import { MostrarCarritoComponent } from './mostrar-carrito/mostrar-carrito.component';
import { PagarComponent } from './pagar/pagar.component';

const routes: Route[] = [
  {path: '', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SigninComponent},
  { path: 'user', component: PerfilUsuarioComponent},
  { path: 'product/:id', component: ProductShowComponent},
  { path: 'carrito', component: MostrarCarritoComponent},
  { path: 'pago', component: PagarComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    UserListComponent,
    MenuComponent,
    LoginComponent,
    LoginComponent,
    PerfilUsuarioComponent,
    SigninComponent,
    HomeComponent,
    ProductShowComponent,
    MostrarCarritoComponent,
    PagarComponent
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
    FlexLayoutModule,
    StoreModule.forRoot({
      shopping: ShoppingReducer,
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
