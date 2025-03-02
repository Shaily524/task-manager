const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Complete Project Report",
        "taskDescription": "Prepare and submit the final project report.",
        "taskDate": "2025-03-05",
        "category": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Client Meeting",
        "taskDescription": "Discuss project progress with the client.",
        "taskDate": "2025-03-07",
        "category": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Fix UI Bug",
        "taskDescription": "Resolve the UI glitch on the dashboard.",
        "taskDate": "2025-03-10",
        "category": "Development",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Update Database",
        "taskDescription": "Migrate old records to the new system.",
        "taskDate": "2025-03-06",
        "category": "Database",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Team Standup",
        "taskDescription": "Daily team sync-up meeting.",
        "taskDate": "2025-03-08",
        "category": "Meetings",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      },
      {
        "taskTitle": "Write Test Cases",
        "taskDescription": "Create test cases for new features.",
        "taskDate": "2025-03-12",
        "category": "Testing",
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Conduct a security audit on the web app.",
        "taskDate": "2025-03-09",
        "category": "Security",
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true
      },
      {
        "taskTitle": "Refactor Code",
        "taskDescription": "Optimize and refactor old modules.",
        "taskDate": "2025-03-11",
        "category": "Development",
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false
      },
      {
        "taskTitle": "Deploy New Feature",
        "taskDescription": "Push the latest feature update to production.",
        "taskDate": "2025-03-13",
        "category": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false
      }
    ]
  }];

const admin = [{
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }];

export const setLocalStorage= ()=>{
  localStorage.setItem('employees',JSON.stringify (employees))
localStorage.setItem('admin',JSON.stringify (admin)) 
}

export const getLocalStorage= ()=>{
  const data = localStorage.getItem('employees')

  console.log(JSON.parse(data))
  }