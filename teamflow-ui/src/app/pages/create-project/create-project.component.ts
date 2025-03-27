import { Component } from '@angular/core';
import {create} from '../../services/fn/projects/create';
import {ProjectsService} from '../../services/services/projects.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-create-project',
  standalone: false,
  templateUrl: './create-project.component.html',
  styleUrl: './create-project.component.scss'
})
export class CreateProjectComponent {
  project = {
    title: '',
    description: '',
    teamEmails: ['']
  };

  errorMsg: string = '';

  constructor(

    private http: HttpClient,
    private router: Router
  ) {}

  // Adaugă un câmp nou de email

  addEmailField(): void {
    this.project.teamEmails.push('');
  }
  trackByIndex(index: number, item: string): number {
    return index;
  }
  removeEmailField(index: number): void {
    if (this.project.teamEmails.length > 1) {
      this.project.teamEmails.splice(index, 1);
    }
  }


  createProject(): void {
    create(this.http, 'http://localhost:8088/api/v1', { body: this.project }).subscribe({
      next: () => {
        this.router.navigate(['/task-manager-home']);
      },
      error: (err) => {
        console.error('Eroare creare proiect:', err);
        this.errorMsg = err.error?.message || 'Eroare la creare proiect.';
      }
    });
  }
}
