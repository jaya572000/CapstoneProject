import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteComponent } from './favorite/favorite.component';
import { GlobalrecomendationsComponent } from './globalrecomendations/globalrecomendations.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouteGuard } from './route.guard';
import { SignupComponent } from './signup/signup.component';
import { ViewbookComponent } from './viewbook/viewbook.component';

const routes: Routes = [
  {path:'recomend',component:GlobalrecomendationsComponent,canActivate:[RouteGuard]},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"signup",component:SignupComponent},
  {path:"favorite",component:FavoriteComponent,canActivate:[RouteGuard]},
  {path:"viewmore",component:ViewbookComponent},
  {path:"",redirectTo:'home',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
