import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule, provideHttpClient, withInterceptors} from '@angular/common/http';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { ActivateAccountComponent } from './pages/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";
import { TaskManagerHomeComponent } from './pages/task-manager-home/task-manager-home.component';
import { TeamMemberHomeComponent } from './pages/team-member-home/team-member-home.component';
import { HomeComponent } from './pages/home/home.component';
import { CreateProjectComponent } from './pages/create-project/create-project.component';
import {authInterceptorFn} from './auth/interceptors/auth.interceptor';
import { RouterModule } from '@angular/router';
import { CreateTaskComponent } from './pages/create-task/create-task.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent,
    TaskManagerHomeComponent,
    TeamMemberHomeComponent,
    HomeComponent,
    CreateProjectComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CodeInputModule
    ],
  providers: [
    provideHttpClient(
      withInterceptors([authInterceptorFn]) // ✅ înregistrare corectă pentru injectia modernă
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
