// Import Angular router module
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import components
import { LoginComponent } from './components/login/login.component';
import {HomeComponent} from './components/home/home.component';
import {SignupComponent} from './components/signup/signup.component';
import {TodoComponent} from './components/todo/todo.component';


// Routes array
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'todo',
    component: TodoComponent
  },
  // {
  //   path: 'http-requests',
  //   component: HttpRequestsComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  {
    path: '**',  // Not found view
    component: HomeComponent
  }
];

// Export router module
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
