import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BlankLayoutComponent } from './layouts/blank-layout/blank-layout.component';
import { InitComponent } from './pages/init/init.component';
import { LearnComponent } from './pages/learn/learn.component';
import { QuizComponent } from './pages/learn/quiz/quiz.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: WelcomeComponent, pathMatch: 'full' },
      { path: 'register', component: RegisterComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent, pathMatch: 'full' },
    ],
  },
  {
    path: '',
    component: BlankLayoutComponent,
    children: [
      { path: 'init', component: InitComponent, pathMatch: 'full' },
      { path: 'learn', component: LearnComponent, pathMatch: 'full' },
      { path: 'learn/quiz', component: QuizComponent, pathMatch: 'full' },
    ],
  },

  { path: '**', redirectTo: '' },
];
