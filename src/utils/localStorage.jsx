const employees = [
  {
    "id": 1,
    "email": "employee1@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Prepare Sales Report",
        "description": "Compile Q2 sales figures, highlight top regions, and add insights.",
        "taskDate": "2025-08-26",
        "category": "Finance",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
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
        "title": "Competitor Snapshot",
        "description": "Summarize two competitor launches this month.",
        "taskDate": "2025-08-25",
        "category": "Research",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ]
  },
  {
    "id": 2,
    "email": "employee2@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Code Review PR#482",
        "description": "Review authentication middleware and add comments.",
        "taskDate": "2025-08-26",
        "category": "Development",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
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
        "title": "Sprint Planning",
        "description": "Estimate tickets and define acceptance criteria.",
        "taskDate": "2025-08-26",
        "category": "Admin",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ]
  },
  {
    "id": 3,
    "email": "employee3@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Dashboard Wireframes",
        "description": "Low-fidelity wireframes for analytics dashboard.",
        "taskDate": "2025-08-26",
        "category": "Design",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
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
        "title": "Design Tokens Export",
        "description": "Export tokens JSON for engineering integration.",
        "taskDate": "2025-08-24",
        "category": "Design",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ]
  },
  {
    "id": 4,
    "email": "employee4@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Nightly DB Backup",
        "description": "Verify snapshot integrity and retention policy.",
        "taskDate": "2025-08-21",
        "category": "Ops",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Optimize Slow Queries",
        "description": "Add indexes and rewrite N+1 heavy endpoints.",
        "taskDate": "2025-08-26",
        "category": "Database",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Incident Postmortem",
        "description": "Draft RCA for 08/18 outage and action items.",
        "taskDate": "2025-08-23",
        "category": "Ops",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Patch Management",
        "description": "Apply security patches to staging and prod nodes.",
        "taskDate": "2025-08-28",
        "category": "Security",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "SLA Breach",
        "description": "Resolution exceeded 30-minute P1 target.",
        "taskDate": "2025-08-18",
        "category": "Ops",
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      },
      {
        "title": "Capacity Planning",
        "description": "Project CPU/memory needs for Q4 traffic.",
        "taskDate": "2025-08-25",
        "category": "Ops",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ]
  },
  {
    "id": 5,
    "email": "employee5@example.com",
    "password": "123",
    "tasks": [
      {
        "title": "Launch Calendar",
        "description": "Draft campaign calendar for September product push.",
        "taskDate": "2025-08-27",
        "category": "Marketing",
        "activeTask": false,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Ad Performance Report",
        "description": "Summarize CPC/CTR across Google and Meta.",
        "taskDate": "2025-08-23",
        "category": "Marketing",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Newsletter Draft",
        "description": "Write August newsletter and collect approvals.",
        "taskDate": "2025-08-24",
        "category": "Content",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      },
      {
        "title": "Community AMA",
        "description": "Host live Q&A with early adopters.",
        "taskDate": "2025-08-29",
        "category": "Community",
        "activeTask": true,
        "newTask": false,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Missed Client Call",
        "description": "Did not attend scheduled sponsor sync.",
        "taskDate": "2025-08-17",
        "category": "Admin",
        "activeTask": false,
        "newTask": false,
        "completedTask": false,
        "failedTask": true
      },
      {
        "title": "SEO Audit",
        "description": "Run site crawl and fix critical issues.",
        "taskDate": "2025-08-26",
        "category": "Marketing",
        "activeTask": true,
        "newTask": true,
        "completedTask": false,
        "failedTask": false
      },
      {
        "title": "Partner Brief",
        "description": "Create co-marketing brief for integration partner.",
        "taskDate": "2025-08-25",
        "category": "Partnerships",
        "activeTask": false,
        "newTask": false,
        "completedTask": true,
        "failedTask": false
      }
    ]
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
  
  console.log(employees, admin)
}