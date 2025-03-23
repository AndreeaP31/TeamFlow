import { Component } from '@angular/core';
import {RegistrationRequest} from '../../services/models/registration-request';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  registerRequest: RegistrationRequest ={email:'',firstname:'', lastname:'',password:'', role:''}
  errorMsg:Array<string>=[];
  selectedRole: 'TASK_MANAGER' | 'TEAM_MEMBER' = 'TEAM_MEMBER';

  selectRole(role: 'TASK_MANAGER' | 'TEAM_MEMBER') {
    this.selectedRole = role;
  }

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){

  }
  login() {
    this.router.navigate(['login']);
  }

  register() {
    this.errorMsg = [];
    this.authService.register({
      body: this.registerRequest
    })
      .subscribe({
        next: () => {
          this.router.navigate(['activate-account']);
        },
        error: (err) => {
          if (err.error?.validationErrors) {
            this.errorMsg = Array.from(err.error.validationErrors);
          } else if (err.error?.error) {
            this.errorMsg.push(err.error.error);
          } else {
            this.errorMsg.push('Unexpected error occurred');
          }
        }

      });
  }

}
