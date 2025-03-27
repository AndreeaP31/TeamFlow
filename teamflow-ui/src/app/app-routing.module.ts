import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './pages/login/login.component';
import {RegisterComponent} from './pages/register/register.component';
import {ActivateAccountComponent} from './pages/activate-account/activate-account.component';
import {TaskManagerHomeComponent} from './pages/task-manager-home/task-manager-home.component';
import {HomeComponent} from './pages/home/home.component';
import {TeamMemberHomeComponent} from './pages/team-member-home/team-member-home.component';
import {CreateProjectComponent} from './pages/create-project/create-project.component';
import {CreateTaskComponent} from './pages/create-task/create-task.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'activate-account',
    component: ActivateAccountComponent
  },
  {
    path: 'projects/:id/add-task',
    component: CreateTaskComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'task-manager-home',
    component: TaskManagerHomeComponent
  },
  {
    path:'team-member-home',
    component: TeamMemberHomeComponent
  },
  {
    path:'create-project',
    component: CreateProjectComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
