const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Prepare Sales Report",
        "description": "Compile Q2 sales figures, highlight top regions, and add insights.",
        "taskDate": "2025-08-26",
        "category": "Finance",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 2,
        "title": "Client Kickoff Call",
        "description": "Lead the onboarding call for the Atlas Corp account.",
        "taskDate": "2025-08-27",
        "category": "Sales",
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 3,
        "title": "Update CRM Records",
        "description": "Clean duplicates and tag high-value leads with proper stages.",
        "taskDate": "2025-08-22",
        "category": "Admin",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "taskNumber": 4,
        "title": "Quarterly Forecast",
        "description": "Draft revenue forecast scenarios (base, best, worst).",
        "taskDate": "2025-08-28",
        "category": "Finance",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 5,
        "title": "Missed Follow-up",
        "description": "Failed to follow up with Beta Logistics within SLA.",
        "taskDate": "2025-08-18",
        "category": "Support",
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      },
      {
        "taskNumber": 6,
        "title": "Proposal Draft",
        "description": "Create pricing proposal for Neo Retail with tiered options.",
        "taskDate": "2025-08-24",
        "category": "Sales",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "taskNumber": 7,
        "title": "Competitor Snapshot",
        "description": "Summarize two competitor launches this month.",
        "taskDate": "2025-08-25",
        "category": "Research",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "new": 1,
      "completed": 3,
      "failed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Ishaan",
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Code Review PR#482",
        "description": "Review authentication middleware and add comments.",
        "taskDate": "2025-08-26",
        "category": "Development",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 2,
        "title": "Bugfix: Payment Retries",
        "description": "Fix double-charge edge case when gateway times out.",
        "taskDate": "2025-08-23",
        "category": "Development",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "taskNumber": 3,
        "title": "Refactor User Service",
        "description": "Extract user profile logic to a separate module with tests.",
        "taskDate": "2025-08-28",
        "category": "Development",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 4,
        "title": "Missed SLA: Hotfix",
        "description": "Hotfix deployment delayed beyond the 2-hour SLA.",
        "taskDate": "2025-08-19",
        "category": "Ops",
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      },
      {
        "taskNumber": 5,
        "title": "API Contract Doc",
        "description": "Write Swagger docs for v2 endpoints.",
        "taskDate": "2025-08-24",
        "category": "Documentation",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "taskNumber": 6,
        "title": "Pair Programming",
        "description": "Work with junior dev on unit testing patterns.",
        "taskDate": "2025-08-27",
        "category": "Development",
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 7,
        "title": "Sprint Planning",
        "description": "Estimate tickets and define acceptance criteria.",
        "taskDate": "2025-08-26",
        "category": "Admin",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "new": 1,
      "completed": 3,
      "failed": 1
    }
  },
  {
    "id": 3,
    "firstName": "Kabir",
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "taskNumber": 1,
        "title": "Dashboard Wireframes",
        "description": "Low-fidelity wireframes for analytics dashboard.",
        "taskDate": "2025-08-26",
        "category": "Design",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 2,
        "title": "Color System Audit",
        "description": "Review palette accessibility (AA/AAA) and document.",
        "taskDate": "2025-08-22",
        "category": "Design",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "taskNumber": 3,
        "title": "Stakeholder Review",
        "description": "Walkthrough of dashboard concepts with PMs.",
        "taskDate": "2025-08-27",
        "category": "Design",
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 4,
        "title": "Prototype in Figma",
        "description": "Clickable prototype with realistic transitions.",
        "taskDate": "2025-08-29",
        "category": "Design",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "taskNumber": 5,
        "title": "Missed Asset Handoff",
        "description": "Icons were not delivered to dev by due date.",
        "taskDate": "2025-08-18",
        "category": "Design",
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      },
      {
        "taskNumber": 6,
        "title": "Design Tokens Export",
        "description": "Export tokens JSON for engineering integration.",
        "taskDate": "2025-08-24",
        "category": "Design",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ],
    "taskCounts": {
      "active": 2,
      "new": 1,
      "completed": 2,
      "failed": 1
    }
  }
];


const admin = [
  {
    "id": 100,
    "email": "admin@example.com",
    "password": "123"
  }
];

export const setLocalStorage = () => {
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}



export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))
  
  return{employees, admin}
}

