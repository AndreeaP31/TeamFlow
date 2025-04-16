# TeamFlow ✅

**TeamFlow** is a full-stack web application for project and task management built using **Java Spring Boot**, **Angular**, and **PostgreSQL**. The app supports secure user authentication with email confirmation, project and team creation, task assignment and progress tracking. Built with scalability and team collaboration in mind.

---

## 📑 Table of Contents
1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Installation](#installation)
4. [Usage](#usage)
5. [Features](#features)
6. [Technologies Used](#technologies-used)
7. [Screenshots](#screenshots)
8. [Author](#author)

---

## Project Overview

TeamFlow allows Task Managers to create teams and projects, assign tasks, and track their status in real-time. Team Members can collaborate within assigned projects, view their tasks, and update progress across four defined stages: `Not Started`, `In Progress`, `In Review`, `Finished`.

Authentication is managed using JWT tokens, with email confirmation via **MailDev**, integrated using **Docker Compose**.

---

## Architecture

- **Frontend**: Angular 17 
- **Backend**: Java Spring Boot (REST API, role-based access)
- **Database**: PostgreSQL
- **Email Service**: MailDev (via Docker Compose)
- **Security**: Spring Security with JWT

---

## Installation

### Prerequisites
- Java 17+
- Node.js + Angular CLI
- Docker & Docker Compose
- PostgreSQL

### 1. Clone the repository
```bash
git clone https://github.com/AndreeaP31/TeamFlow.git
```

### 2. Backend setup
```bash
cd TeamFlow/backend
./mvnw clean install
```

Create a `.env` or `application.properties` file with your PostgreSQL and MailDev configuration.

### 3. Frontend setup
```bash
cd ../frontend
npm install
```

### 4. Start MailDev with Docker Compose
```bash
docker-compose up -d
```

MailDev will run at `http://localhost:1080`

### 5. Run the apps
- Start Spring Boot backend
- Start Angular frontend
```bash
ng serve
```

Angular will run at: `http://localhost:4200`

---

## Usage

- Register a new account — confirmation email will be sent via MailDev
- Log in with confirmed account
- Task Manager:
  - Create teams using email
  - Create and assign projects & tasks
- Team Member:
  - View assigned projects
  - Update task statuses

---

## Features

- 🔒 JWT-based authentication & role-based authorization
- 📧 Email confirmation using MailDev
- 📊 Project & task management dashboard
- 👥 Team creation & task delegation
- 🧩 Status tracking across four stages
- 🐳 Docker Compose integration for local email service
- 🖥️ Responsive Angular frontend

---

## Technologies Used

- **Java 17** + **Spring Boot**
- **Angular 17**
- **PostgreSQL**
- **Spring Security** + **JWT**
- **MailDev** (email testing in dev)
- **Docker Compose**
- **Lombok**, **JPA/Hibernate**

---

## Screenshots

---

## Author

- **Andreea Popovici** – Full Stack 
  [GitHub](https://github.com/AndreeaP31)

