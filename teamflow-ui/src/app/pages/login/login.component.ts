import { Component } from '@angular/core';
import {AuthenticationRequest} from '../../services/models/authentication-request';
import {AuthenticationService} from '../../services/services/authentication.service';
import {Router} from '@angular/router';
import {TokenService} from '../../token/token.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent{

  authRequest: AuthenticationRequest={email: '', password: ''}
  errorMsg: Array<string>=[];
  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private tokenService:TokenService
  ){}

  login() {
    this.errorMsg = [];
    this.authService.authenticate({
      body: this.authRequest
    }).subscribe({
      next: (res) => {
        this.tokenService.token = res.token as string;

        if (this.tokenService.isTaskManager()) {
          this.router.navigate(['/task-manager-home']);
        } else if (this.tokenService.isTeamMember()) {
          this.router.navigate(['/team-member-home']);
        } else {
          this.router.navigate(['/home']); // fallback
        }

      },
      error: (err) => {
        console.log(err);
        if (err.error.validationErrors) {
          this.errorMsg = err.error.validationErrors;
        } else {
          this.errorMsg.push(err.error.errorMsg);
        }
      }
    });
  }

  register() {
    this.router.navigate(['register']);
  }
}
