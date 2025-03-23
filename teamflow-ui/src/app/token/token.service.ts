import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  set token(token: string){
    localStorage.setItem('token',token);
  }
  get token(){
    return localStorage.getItem('token') as string;
  }
  get payload(): any {
    try {
      const base64 = this.token.split('.')[1];
      return JSON.parse(atob(base64));
    } catch (e) {
      return null;
    }
  }

  get roles(): string[] {
    return this.payload?.authorities || [];
  }

  get username(): string {
    return this.payload?.sub || '';
  }

  isLoggedIn(): boolean {
    return !!this.token;
  }

  isTaskManager(): boolean {
    return this.roles.includes('TASK_MANAGER');
  }

  isTeamMember(): boolean {
    return this.roles.includes('TEAM_MEMBER');
  }

  clear(): void {
    localStorage.removeItem('token');
  }
}
