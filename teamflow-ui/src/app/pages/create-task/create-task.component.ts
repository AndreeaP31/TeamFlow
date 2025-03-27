import { Component } from '@angular/core';
import {TaskRequest} from '../../services/models/task-request';
import {ActivatedRoute, Router} from '@angular/router';
import {TaskControllerService} from '../../services/services/task-controller.service';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-task',
  standalone: true,
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
  imports: [FormsModule,
    CommonModule ]
})
export class CreateTaskComponent {

  task: TaskRequest = {
    title: '',
    description: '',
    deadline: '',
    status: 'TODO',
    assigneeEmails: [''], // ✅ listă inițializată
    projectId: 0
  };

  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskControllerService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const parsedId = id ? parseInt(id, 10) : NaN;
    if (!isNaN(parsedId)) {
      this.task.projectId = parsedId;
    } else {
      this.errorMsg = 'ID-ul proiectului este invalid.';
    }
  }

  get safeAssigneeEmails(): string[] {
    return this.task.assigneeEmails ?? [];
  }

  addEmailField(): void {
    this.task.assigneeEmails?.push('');
  }

  removeEmailField(index: number): void {
    if (Array.isArray(this.task.assigneeEmails) && this.task.assigneeEmails.length > 1) {
      this.task.assigneeEmails.splice(index, 1);
    }
  }

  create(): void {
    this.taskService.createTask({ body: this.task }).subscribe({
      next: () => this.router.navigate(['/task-manager-home']),
      error: (err) => {
        console.error(err);
        this.errorMsg = err?.error?.message || 'Eroare la crearea taskului.';
      }
    });
  }

  trackByIndex(index: number): number {
    return index;
  }
}
