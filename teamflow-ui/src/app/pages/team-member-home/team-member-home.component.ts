import { Component } from '@angular/core';
import {getMyTasks} from '../../services/fn/task-controller/get-my-tasks';
import { Task } from '../../services/models/task';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-team-member-home',
  standalone: false,
  templateUrl: './team-member-home.component.html',
  styleUrl: './team-member-home.component.scss'
})
export class TeamMemberHomeComponent {
  tasks: Task[] = [];
  errorMsg = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    getMyTasks(this.http, 'http://localhost:8088/api/v1').subscribe({
      next: (res) => {
        this.tasks = res.body || [];
      },
      error: (err) => {
        console.error('Eroare la încărcarea taskurilor:', err);
        this.errorMsg = err.error?.message || 'Eroare necunoscută.';
      }
    });
  }
}
