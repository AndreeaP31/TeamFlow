/* tslint:disable */
/* eslint-disable */
/* Code generated by ng-openapi-gen DO NOT EDIT. */

export interface TaskRequest {
  assigneeEmails?: Array<string>;
  deadline?: string;
  description?: string;
  projectId?: number;
  status?: 'TODO' | 'IN_PROGRESS' | 'DONE' | 'BLOCKED';
  title: string;
}
