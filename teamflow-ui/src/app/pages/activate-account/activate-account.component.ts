import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/services/authentication.service';

@Component({
  selector: 'app-activate-account',
  standalone: false,
  templateUrl: './activate-account.component.html',
  styleUrl: './activate-account.component.scss'
})
export class ActivateAccountComponent {
  message: string = '';
  isValid=true;
  submitted=false;

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ){

  }

  onCodeCompleted(token: string) {
    this.confirmAccount(token);


  }

  redirectToLogin() {
    this.router.navigate(['login']);
  }

  private confirmAccount(token: string) {
    this.authService.confirm({
      token
    }).subscribe({
      next:()=>{
        this.message="Your account has been successfully activated.\n Now you can login";
        this.submitted=true
        this.isValid=true;
      },
      error:()=>{
        this.message="Token has been expired.\n Check new token";
        this.submitted=true;
        this.isValid=false;
      }
    })

  }
}
