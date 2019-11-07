import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Route} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { UserComponent } from './user/user.component';
import { AboutComponent } from './about/about.component';

const routes: Route[] = [
  {path: '', component: AppComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    TopBarComponent,
    UserComponent,
    AboutComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
