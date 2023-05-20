import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { OrderGuard } from './auth/order.guard';
import { AdminGuard } from './auth/admin.guard'

import { LoginPageComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UserSettingComponent } from './pages/user-setting/user-setting.component';
import { HomeComponent } from './pages/home/home.component';
import { FoodDetailComponent } from './pages/food-detail/food-detail.component';
import { CartComponent } from './pages/cart/cart.component';
import { OrderComponent } from './pages/order/order.component';
import { MenuComponent } from './pages/menu/menu.component';
import { OrderConfirmComponent } from './pages/order-confirm/order-confirm.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeAuthComponent } from './pages/home-auth/home-auth.component';
import { AddfoodComponent } from './pages/add-food/add-food.component';
import { UpdateComponent } from './pages/update/update.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
 {
  path: 'login',
  component: LoginPageComponent,
  title: 'Login | Fsoft Food'
 },
 {
  path: 'register',
  component: RegisterComponent,
  title: 'Register | Fsoft Food'
 },
 {
  path: 'profile',
  component: ProfileComponent,
  title: 'User Profile | Fsoft Food',
  canActivate: [AuthGuard]
 },
 {
  path: 'setting',
  component: UserSettingComponent,
  title: 'User Setting | Fsoft Food',
  canActivate: [AuthGuard]
 },
 {
  path: 'home',
  component: HomeComponent,
  title: 'Home | Fsoft Food'
 },
 {
  path: 'food-detail/:id',
  component: FoodDetailComponent,
  title: 'Food Detail | Fsoft Food',
  canActivate: [AuthGuard]
 },
 {
  path: 'menu',
  component: MenuComponent,
  title: 'Menu Food | Fsoft Food',
  canActivate: [AuthGuard]
  // loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule)
 },
 { path: 'menu?search=:searchTerm', component: MenuComponent },
 { path: 'menu/tag/:tag', component: MenuComponent },
 {
  path: 'cart',
  component: CartComponent,
  title: 'Cart | Fsoft Food',
  canActivate: [AuthGuard]
 },
 {
  path: 'order',
  component: OrderComponent,
  title: 'Order | Fsoft Food',
  canActivate: [AuthGuard, OrderGuard]
 },
 {
  path: 'order-confirm',
  component: OrderConfirmComponent,
  title: 'Order Confirm | Fsoft Food',
  canActivate: [AuthGuard]
 },
 {
    path: 'home-auth',
    component: HomeAuthComponent,
    title: 'Homepage',
    canActivate: [AuthGuard, AdminGuard]
},
{
    path: 'add-food',
    component: AddfoodComponent,
    title: 'AddFood',
    canActivate: [AuthGuard, AdminGuard]
},
{
    path: 'update-food/:id',
    component: UpdateComponent,
    title: 'Update',
    canActivate: [AuthGuard, AdminGuard]
},
{
    path: 'dashboard',
    component: DashboardComponent,
    title: 'Dashboard',
    canActivate: [AuthGuard, AdminGuard]
},
 { path: '**', component: NotFoundComponent, title: 'Page Not Found | Fsoft Food' }
];

@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule {}
